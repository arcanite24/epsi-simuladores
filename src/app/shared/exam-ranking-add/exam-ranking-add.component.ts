import { Component, OnInit, Input } from '@angular/core';
import uuid from 'uuid'
import { Exam, Collections } from 'src/app/app.models';
import { StatsService } from 'src/app/services/stats.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';

@Component({
  selector: 'epsi-exam-ranking-add',
  templateUrl: './exam-ranking-add.component.html',
  styleUrls: ['./exam-ranking-add.component.scss']
})
export class ExamRankingAddComponent implements OnInit {

  public name: string
  @Input() public exam: string
  @Input() public promedio: number = 0

  constructor(
    private stats: StatsService,
    private modal: NgxSmartModalService,
    private toastr: ToastrService,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
  }

  async sendRanking(name: string) {

    const exam = await this.afs.collection(Collections.EXAM).doc<Exam>(this.exam).valueChanges().pipe(take(1)).toPromise()

    this.stats.registerRanking(exam, {
      displayName: name,
      uid: uuid.v4()
    }, this.promedio)

    this.toastr.success('Gracias por enviar tu información')
    this.modal.getModal('examRankingAdd').close()

  }

}
