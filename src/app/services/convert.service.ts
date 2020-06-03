import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  private PDF_API = 'https://v2.convertapi.com/convert/pdf/to/png?Secret=JIfvyn5wHSAACbC8';

  constructor(
    private toastr: ToastrService,
    private http: HttpClient,
    private storage: AngularFireStorage,
  ) { }

  async convertPDF(files: FileList) {

    if (!files) { return; }
    if (files.length <= 0) { return; }

    const file = files.item(0);
    if (!file.name.includes('.pdf')) { return this.toastr.error('El archivo debe ser de tipo .pdf'); }

    console.log(files);

    try {

      const result = await this.convertSlide(file);
      const urls = await this.uploadSlides(result.Files);

      console.log(urls);
      return urls;

    } catch (error) {
      this.toastr.error('Ocurrió un error al convertir la presentación');
      console.log(error);
    }

  }

  convertSlide(file: File) {
    const data = new FormData();
    data.append('File', file);
    return this.http.post<any>(this.PDF_API, data).toPromise();
  }

  async uploadSlides(slides: { FileData: string, FileName: string, FileSize: number }[]) {
    const queue = slides.map(slide => this.uploadFile(slide.FileName, slide.FileData));
    return Promise.all(queue);
  }

  uploadFile(filename: string, data: string): Promise<string | null> {
    return new Promise((resolve, _) => {
      const ref = this.storage.ref(`pdf/${filename}`);
      const task = ref.putString(data, 'base64');
      task.snapshotChanges().pipe(
        finalize(() => {
          ref.getDownloadURL().subscribe(url => resolve(url));
        })
      ).subscribe();
    });
  }

}
