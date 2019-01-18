import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import uuid from 'uuid'

@Component({
  selector: 'app-storage-uploader',
  templateUrl: './storage-uploader.component.html',
  styleUrls: ['./storage-uploader.component.scss']
})
export class StorageUploaderComponent implements OnInit {

  public file: File
  public loading: boolean = false
  public percent: number = 0
  public finished: boolean = false

  public urlResult: string

  public task: AngularFireUploadTask
  @Output() onFinish: EventEmitter<string> = new EventEmitter()

  @ViewChild('fileUploader')
  private fileInput: ElementRef

  constructor(
    private storage: AngularFireStorage
  ) { }

  ngOnInit() {
  }

  onFileSelected(files: FileList) {
    if (!files) return
    if (!files.item(0)) return
    this.file = files.item(0)
    this.loading = true
    this.uploadFile(this.file)
  }

  onFinishUpload(ref: AngularFireStorageReference) {
    ref.getDownloadURL().subscribe(url => {
      this.finished = false
      this.loading = false
      this.file = null
      this.urlResult = url
      this.fileInput.nativeElement.value = null
      this.onFinish.emit(url)
    })
  }

  uploadFile(file: File) {

    const path = `${uuid.v4()}-${file.name}`
    const ref = this.storage.ref(path)
    this.task = this.storage.upload(path, file)    
    this.task.percentageChanges().subscribe(percent => this.percent = percent)

    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.onFinishUpload(ref)        
      })
    ).subscribe()

  }

}
