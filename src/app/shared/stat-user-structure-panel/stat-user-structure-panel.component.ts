import {Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { StatView, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'epsi-stat-user-structure-panel',
  templateUrl: './stat-user-structure-panel.component.html',
  styleUrls: ['./stat-user-structure-panel.component.scss']
})
export class StatUserStructurePanelComponent implements OnInit {

  @Input() public user: string;

  public views$: Observable<StatView[]> = this.afs.collection<StatView>(Collections.STAT_VIEW, ref => ref
    .where('isTimeline', '==', false))
    .valueChanges()
    .pipe(
      map(views => views.filter(v => !v.parent)),
    );

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    
  }

}
