import { DataService } from './../../services/data.service';
import { Answer, Collections, Exam } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { Question } from './../../app.models';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'epsi-exam-questions-import',
  templateUrl: './exam-questions-import.component.html',
  styleUrls: ['./exam-questions-import.component.scss']
})
export class ExamQuestionsImportComponent implements OnInit {

  public questions: Question[];
  public exam: string = this.route.snapshot.paramMap.get('id');

  constructor(
    private toastr: ToastrService,
    private papa: Papa,
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private data: DataService,
  ) { }

  ngOnInit() {
  }

  onFileChange(files: FileList) {

    if (!files) { return; }
    if (!files.item(0)) { return; }

    const reader = new FileReader();
    reader.readAsText(files.item(0));


    reader.onload = () => {
      this.parseCsv(reader.result as string);
    };

  }

  parseCsv(text: string) {
    try {

      this.papa.parse(text, {
        complete: res => this.questions = this.formatCsv(res.data)
      });

    } catch (error) {
      console.log(error);
      this.toastr.error('Error weón...');
    }
  }

  formatCsv(data: any[]): any[] {

    return data.map(q => {

      const [text, r1, r2, r3, r4, correcta, img, tag] = q;
      const id = this.afs.createId();

      const respuestas: Answer[] = [];

      if (r1) {
        respuestas.push({
          id: this.afs.createId(),
          text: r1,
          parent: id,
        });
      }

      if (r2) {
        respuestas.push({
          id: this.afs.createId(),
          text: r2,
          parent: id,
        });
      }

      if (r3) {
        respuestas.push({
          id: this.afs.createId(),
          text: r3,
          parent: id,
        });
      }

      if (r4) {
        respuestas.push({
          id: this.afs.createId(),
          text: r4,
          parent: id,
        });
      }

      const payload: Question = {
        id,
        text,
        correcta: null,
        respuestas: [],
        img: img === '' ? null : img,
        tags: [tag],
      };

      if (correcta === '1') { payload.correcta = respuestas[0].id; }
      if (correcta === '2') { payload.correcta = respuestas[1].id; }
      if (correcta === '3') { payload.correcta = respuestas[2].id; }
      if (correcta === '4') { payload.correcta = respuestas[3].id; }

      payload.respuestas = respuestas;
      return payload;

    });

  }

  async writeToDB(questions: Question[]) {

    for (const q of questions) {

      for (const r of q.respuestas) {
        console.log('agregando respuesta: ', r.text);
        await this.afs.collection(Collections.ANSWER).doc(r.id).set({...r});
      }

      console.log('agregando pregunta: ', q.text);
      await this.afs.collection(Collections.QUESTION).doc(q.id).set({...q});

    }

    console.log('updating questions for exam', this.exam);
    const exam = await this.data.getDocAlt<Exam>(Collections.EXAM, this.exam);

    exam.questions = [...exam.questions, ...this.questions];
    await this.afs.collection(Collections.EXAM).doc(exam.id).update({ questions: exam.questions });

    this.toastr.success('preguntas improtadas');

  }

}
