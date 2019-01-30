import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Collections, EventTask } from 'src/app/app.models';
import uuid from 'uuid'

@Component({
  selector: 'epsi-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit {

  private _event: Event

  @Input()
  public set event(event: Event) { this.eventChanged(event) }
  public get event(): Event { return this._event }

  public editForm: FormGroup

  constructor(
    private afs: AngularFirestore,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private modal: NgxSmartModalService
  ) {
    this.editForm = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      desc: ['', Validators.required],
      date: [new Date().toISOString(), Validators.required],
      tasks: [[]],
      links: [[]]
    })
  }

  ngOnInit() {
  }

  eventChanged(m: Event) {
    this._event = m
    if (this.editForm && m) this.editForm.patchValue(this._event)
  }

  async submitForm() {

    if (this.editForm.valid) {

      try {
        await this.afs.doc(`${Collections.EVENT}/${this.editForm.value.id}`).set(this.editForm.value, {merge: true})
        this.toastr.success('Evento editado correctamente.')
        this.modal.getModal('eventEditModal').close()
        this.editForm.reset()
      } catch (error) {
        console.log(error)
        this.toastr.error('Ocurrió un error al editar...')
      }

    } else {
      this.toastr.error('La información que ingresaste no es válida.')
    }

  }

  addTask(tasks: EventTask[] = []) {
    if (!tasks) tasks = []
    const id = uuid.v4()
    tasks.push({id, label: 'Nueva Tarea', users: [], completed: 0})
    this.editForm.patchValue({tasks})
  }

  removeTask(tasks: EventTask[], task: EventTask) {
    this.editForm.patchValue({ tasks: tasks.filter(e => e.id != task.id) })
  }

}
