import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Content, Collections, Exam, ExamTypes } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'epsi-content-detail-page',
  templateUrl: './content-detail-page.component.html',
  styleUrls: ['./content-detail-page.component.scss']
})
export class ContentDetailPageComponent implements OnInit {

  public content$: Observable<Content>;

  public content_type: string = this.route.snapshot.paramMap.get('type');
  public parent_id: string = this.route.snapshot.paramMap.get('id');

  public seekTime: number;
  public contentExam: Exam;

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {

    this.content$ = this.afs.doc<Content>(`${Collections.CONTENT}/${this.parent_id}`).valueChanges();
    this.loadContentExam();

  }

  async loadContentExam() {

    const oldExam = await this.afs.collection(Collections.EXAM).doc<Exam>(this.parent_id)
      .valueChanges()
      .pipe(take(1))
      .toPromise();

    if (oldExam) { return this.contentExam = oldExam; }

    const contentExam = await this.afs.collection<Exam>(Collections.EXAM, ref => ref
      .where('content.id', '==', this.parent_id)
      .where('type', '==', ExamTypes.CONTENIDO))
      .valueChanges()
      .pipe(take(1), map(exams => exams ? exams[0] : null))
      .toPromise();

    if (contentExam) {
      console.log(contentExam);
      this.contentExam = contentExam;
    } else {
      console.log('content exam not found');
    }

  }

}
