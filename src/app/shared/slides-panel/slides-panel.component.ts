import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Slide, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'epsi-slides-panel',
  templateUrl: './slides-panel.component.html',
  styleUrls: ['./slides-panel.component.scss']
})
export class SlidesPanelComponent implements OnInit {

  public slides$: Observable<Slide[]>

  constructor(
    private afs: AngularFirestore,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.slides$ = this.afs.collection<Slide>(Collections.SLIDE, ref => ref.limit(5)).valueChanges()
  }

}
