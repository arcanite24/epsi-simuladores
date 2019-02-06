import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Question, Collections, Exam, ExamTypes } from 'src/app/app.models';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'epsi-question-pool-panel',
  templateUrl: './question-pool-panel.component.html',
  styleUrls: ['./question-pool-panel.component.scss']
})
export class QuestionPoolPanelComponent implements OnInit {

  public loader: boolean = false
  public quantity: number

  constructor(
    private afs: AngularFirestore,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async generatePool() {

    this.loader = true

    if (!this.quantity) return this.toastr.error('Ingresa una cantidad...')
    if (this.quantity < 2) return this.toastr.error('Ingresa una cantidad mayor a 3 preguntas')

    const questions: Question[] = await this.afs.collection<Question>(Collections.QUESTION, ref => ref
      .orderBy('id')
      .limit(this.quantity))
      .valueChanges()
      .pipe(take(1))
      .toPromise()

    let exam: Exam = {
      id: this.afs.createId(),
      name: `Pool - ${Date.now()}`,
      desc: '.',
      type: ExamTypes.POOL,
      isPool: true,
      questions
    }

    await this.afs.doc(`${Collections.EXAM}/${exam.id}`).set({...exam})
    this.toastr.success('Generando tu pool de preguntas...')
    await this.router.navigate(['/exam', exam.type, exam.id])
    this.loader = false

  }

}
