import { Component, OnInit, Input } from '@angular/core';
import { StatView, Collections, Tag } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'epsi-stat-view-edit',
  templateUrl: './stat-view-edit.component.html',
  styleUrls: ['./stat-view-edit.component.scss']
})
export class StatViewEditComponent implements OnInit {

  private _view: StatView
  public tempView: StatView

  public _hideParent: boolean

  @Input()
  public set view(view: StatView) { this.viewChanged(view) }
  public get view(): StatView { return this._view }

  @Input() public isTimeline: boolean = true
  @Input() public set hideParent(h: boolean) { 
    this._hideParent = h
    console.log(this._hideParent)
  }

  public editForm: FormGroup = this.fb.group({
    id: [this.afs.createId(), Validators.required],
    name: ['', Validators.required],
    includeTags: [[]],
    excludeTags: [[]],
    parent: null,
    parent_name: null,
    isTimeline: false,
  })

  public tags$: Observable<string[]> = this.afs.collection<Tag>(Collections.TAG)
    .valueChanges()
    .pipe(
      map(tags => tags.map(t => t.value))
    )

  public views$: Observable<StatView[]> = this.afs.collection<StatView>(Collections.STAT_VIEW, ref => ref.where('isTimeline', '==', false)).valueChanges()

  constructor(
    private afs: AngularFirestore,
    private toastr: ToastrService,
    private modal: NgxSmartModalService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  viewChanged(view: StatView) {
    this._view = view
    if (this.editForm && view) this.editForm.patchValue(view)
  }

  async submitForm() {

    if (this.editForm.valid) {

      try {
        await this.afs.doc(`${Collections.STAT_VIEW}/${this.editForm.value.id}`).set(this.editForm.value, {merge: true})
        this.toastr.success('Vista editado correctamente.')
        this.modal.getModal('viewEditModal').close()
        this.editForm.reset()
      } catch (error) {
        console.log(error)
        this.toastr.error('Ocurrió un error al editar...')
      }

    } else {
      this.toastr.error('La información que ingresaste no es válida.')
    }

  }

  tagSelect(key: string, tags: string[] = [], tag: string) {
    //if (!this.editForm.value[key]) this.editForm.patchValue({ [key]: [] })
    if (tags.indexOf(tag) >= 0) return this.toastr.error('El tag ya está registrado.')
    tags.push(tag)
    this.editForm.patchValue({ [key]: tags })
  }

  removeTag(tags: string[], tag: string, key: string) {
    tags.splice(tags.indexOf(tag), 1)
    this.editForm.patchValue({ [key]: tags })
  }

  parentChanged(v: StatView) {
    this.editForm.patchValue({parent: v.id, parent_name: v.name})
  }

}
