import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Coupon, Collections } from 'src/app/app.models';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'epsi-user-coupons-panel',
  templateUrl: './user-coupons-panel.component.html',
  styleUrls: ['./user-coupons-panel.component.scss']
})
export class UserCouponsPanelComponent implements OnInit {

  public coupons$: Observable<Coupon[]>

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      if (user && !this.coupons$) this.coupons$ = this.afs.collection<Coupon>(Collections.COUPON, ref => ref.where('owner', '==', user.uid)).valueChanges()
    })
  }

}
