import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Answer } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'epsi-answer-edit-item',
  templateUrl: './answer-edit-item.component.html',
  styleUrls: ['./answer-edit-item.component.scss']
})
export class AnswerEditItemComponent implements OnInit {

  @Input() public answer: Answer
  @Input() public correcta: string

  @Output() private removed: EventEmitter<string> = new EventEmitter()
  @Output() private edited: EventEmitter<Answer> = new EventEmitter()
  @Output() private selected: EventEmitter<string> = new EventEmitter()

  public editing: boolean = false
  public tempText: string = ''

  constructor(
    private afs: AngularFirestore,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  async removeAnswer(id: string) {
    await this.afs.doc(`answer/${id}`).delete()
    this.toastr.success('Pregunta borrada correctamente.')
    // TODO: Add recycler bin for answers
    this.removed.next(id)
  }

  editAnswer() {
    this.editing = true
    this.tempText = this.answer.text
  }

  async updateAnswer() {
    this.editing = false
    this.answer.text = this.tempText
    await this.afs.doc(`answer/${this.answer.id}`).set({text: this.tempText}, {merge: true})
    this.edited.next(this.answer)
  }

  selectAnswer() {
    this.selected.next(this.answer.id)
  }

}