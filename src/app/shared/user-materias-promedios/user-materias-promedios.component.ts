import { meanBy } from 'lodash';
import { Collections, Content, ContentTypesEnum, ExamResults } from './../../app.models';
import { DataService } from './../../services/data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'epsi-user-materias-promedios',
  templateUrl: './user-materias-promedios.component.html',
  styleUrls: ['./user-materias-promedios.component.scss']
})
export class UserMateriasPromediosComponent implements OnInit, OnDestroy {

  private userSub: Subscription;

  public promedios: any[];
  public chartData: any[];

  constructor(
    private auth: AuthService,
    private data: DataService,
  ) { }

  ngOnInit() {
    this.userSub = this.auth.user$.subscribe(user => {
      if (user && !this.promedios) { this.loadPromedios(user.uid); }
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  async loadPromedios(uid: string) {

    this.promedios = [];

    const materias = await this.data.getCollectionQuery<Content>(Collections.CONTENT, ref => ref
      .where('type', '==', ContentTypesEnum.Materia));

    for (const materia of materias) {
      if (materia.exam) {

        const results = await this.data.getCollectionQuery<ExamResults>(Collections.EXAM_RESULT, ref => ref
          .where('user', '==', uid)
          .where('exam', '==', materia.exam));

        this.promedios.push({
          name: materia.name,
          promedio: meanBy(results, 'promedio')
        });

      }
    }

    this.chartData = this.promedios.map(r => ({name: r.name, value: r.promedio * 10}));

  }

}
