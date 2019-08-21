import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import uuid from 'uuid';

@Component({
  selector: 'app-storage-uploader',
  templateUrl: './storage-uploader.component.html',
  styleUrls: ['./storage-uploader.component.scss']
})
export class StorageUploaderComponent implements OnInit {

  public file: File;
  public loading = false;
  public percent = 0;
  public finished = false;

  public urlResult: string;

  public task: AngularFireUploadTask;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onFinish: EventEmitter<string> = new EventEmitter();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onLoading: EventEmitter<boolean> = new EventEmitter();

  @ViewChild('fileUploader')
  private fileInput: ElementRef;

  constructor(
    private storage: AngularFireStorage
  ) { }

  ngOnInit() {
  }

  onFileSelected(files: FileList) {
    if (!files) { return; }
    if (!files.item(0)) { return; }
    this.file = files.item(0);
    this.loading = true;
    this.uploadFile(this.file);
  }

  onFinishUpload(ref: AngularFireStorageReference) {
    ref.getDownloadURL().subscribe(url => {
      this.finished = false;
      this.loading = false;
      this.file = null;
      this.urlResult = url;
      this.fileInput.nativeElement.value = null;
      this.onFinish.emit(url);
      this.onLoading.next(false);
    });
  }

  uploadFile(file: File) {

    this.onLoading.next(true);
    const path = `${uuid.v4()}-${file.name}`;
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file);
    this.task.percentageChanges().subscribe(percent => this.percent = percent);

    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.onFinishUpload(ref);
      })
    ).subscribe();

  }

}
