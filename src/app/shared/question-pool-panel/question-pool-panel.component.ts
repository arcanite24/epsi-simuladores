import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Question, Collections, Exam, ExamTypes, Roles } from 'src/app/app.models';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { flattenDeep, shuffle } from 'lodash';
import { TagsByRole } from 'src/app/app.config';

@Component({
  selector: 'epsi-question-pool-panel',
  templateUrl: './question-pool-panel.component.html',
  styleUrls: ['./question-pool-panel.component.scss']
})
export class QuestionPoolPanelComponent implements OnInit {

  @Input() public showContent = false;
  public loader = false;
  public quantity: number;

  constructor(
    public auth: AuthService,
    private afs: AngularFirestore,
    private toastr: ToastrService,
    private router: Router,
    private data: DataService,
  ) { }

  ngOnInit() {
  }

  async getQuestionsByTags(tags: string[]): Promise<Question[]> {

    let cache = [];

    for (const tag of tags) {
      const q = await this.data
        .getCollectionQueryAltLimit(Collections.QUESTION, 'tags', 'array-contains', tag, 10);
      cache = [...cache, ...q];
    }

    return cache;
  }

  async generatePool() {

    this.loader = true;

    if (!this.quantity) { return this.toastr.error('Ingresa una cantidad...'); }
    if (this.quantity < 2) { return this.toastr.error('Ingresa una cantidad mayor a 3 preguntas'); }

    let exams: Exam[] = [];
    let questions: Question[] = [];

    if (this.auth.isPremium2020) {
      exams = await this.data.getCollectionQueryAltLimit<Exam>(Collections.EXAM, 'type', '==', ExamTypes.SIMULADOR, 30);
    } else {
      if (this.auth.isLight2020) {
        exams = await this.data.getCollectionQueryAlt<Exam>(Collections.EXAM, 'isLight', '==', true);
      } else {
        if (this.auth.isMedicinaInterna2020) {
          const cache = await this.getQuestionsByTags(TagsByRole[Roles.isMedicinaInterna2020]);
          questions = [...questions, ...cache];
        }

        if (this.auth.isPediatria2020) {
          const cache = await this.getQuestionsByTags(TagsByRole[Roles.isPediatria2020]);
          questions = [...questions, ...cache];
        }

        if (this.auth.isGineco2020) {
          const cache = await this.getQuestionsByTags(TagsByRole[Roles.isGineco2020]);
          questions = [...questions, ...cache];
        }

        if (this.auth.isCirugia2020) {
          const cache = await this.getQuestionsByTags(TagsByRole[Roles.isCirugia2020]);
          questions = [...questions, ...cache];
        }

        if (this.auth.isUrgencias2020) {
          const cache = await this.getQuestionsByTags(TagsByRole[Roles.isUrgencias2020]);
          questions = [...questions, ...cache];
        }
      }
    }

    questions = [...questions, ...flattenDeep(exams
      .map(e => e.questions)) as Question[]];

    questions = shuffle(questions).slice(0, this.quantity);

    const exam: Exam = {
      id: this.afs.createId(),
      name: `Pool - ${Date.now()}`,
      desc: '.',
      type: ExamTypes.POOL,
      isPool: true,
      questions
    };

    await this.afs.doc(`${Collections.EXAM}/${exam.id}`).set({...exam});
    this.toastr.success('Generando tu pool de preguntas...');
    await this.router.navigate(['/exam', exam.type, exam.id]);
    this.loader = false;

  }

}
