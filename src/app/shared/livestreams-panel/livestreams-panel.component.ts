import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Livestream, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'epsi-livestreams-panel',
  templateUrl: './livestreams-panel.component.html',
  styleUrls: ['./livestreams-panel.component.scss']
})
export class LivestreamsPanelComponent implements OnInit {

  public lives$: Observable<Livestream[]>

  constructor(
    private afs: AngularFirestore,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.lives$ = this.afs.collection<Livestream>(Collections.LIVESTREAM).valueChanges()
  }

}
