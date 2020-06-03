import { Component, OnInit, Input } from '@angular/core';
import { Programa, Collections } from 'src/app/app.models';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Observable } from 'rxjs';

@Component({
  selector: 'epsi-programa-edit',
  templateUrl: './programa-edit.component.html',
  styleUrls: ['./programa-edit.component.scss']
})
export class ProgramaEditComponent implements OnInit {

  private _programa: Programa

  @Input()
  public set programa(p: Programa) { this.programaChanged(p) }
  public get programa(): Programa { return this._programa }

  public editForm: FormGroup = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    text: ['', Validators.required],
    links: [[]],
    parent: null,
    unlockedBy: null
  })

  public programas$: Observable<Programa[]> = this.afs.collection<Programa>(Collections.PROGRAMA).valueChanges()
  public tempParent: Programa

  constructor(
    private afs: AngularFirestore,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private modal: NgxSmartModalService
  ) {
    
  }

  ngOnInit() {
  }

  programaChanged(p: Programa) {
    this._programa = p
    if (p && this.editForm) this.editForm.patchValue(p  )
  }

  parentSelected(parent: Programa) {
    this.editForm.patchValue({parent})
  }

  async submitForm() {

    if (this.editForm.valid) {

      try {
        await this.afs.doc(`${Collections.PROGRAMA}/${this.editForm.value.id}`).set(this.editForm.value, {merge: true})
        this.toastr.success('Programa editado correctamente.')
        this.modal.getModal('programaEditModal').close()
        this.editForm.reset()
      } catch (error) {
        console.log(error)
        this.toastr.error('Ocurrió un error al editar...')
      }

    } else {
      this.toastr.error('La información que ingresaste no es válida.')
    }

  }

  addLink(links: any[] = []) {
    links.push({label: '', url: ''})
    this.editForm.patchValue({links})
  }

  removeLink(links: any[] = [], i: number) {
    links.splice(i, 1)
    this.editForm.patchValue({links})
  }

}
