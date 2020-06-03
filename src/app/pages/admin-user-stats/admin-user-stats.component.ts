import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User, Collections } from 'src/app/app.models';

@Component({
  selector: 'epsi-admin-user-stats',
  templateUrl: './admin-user-stats.component.html',
  styleUrls: ['./admin-user-stats.component.scss']
})
export class AdminUserStatsComponent implements OnInit {

  public id: string = this.route.snapshot.paramMap.get('id')
  public user$: Observable<User> = this.afs.collection(Collections.USER).doc<User>(this.id).valueChanges()

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
