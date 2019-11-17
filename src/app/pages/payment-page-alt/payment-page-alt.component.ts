import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PaymentModel, Collections } from 'src/app/app.models';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'epsi-payment-page-alt',
  templateUrl: './payment-page-alt.component.html',
  styleUrls: ['./payment-page-alt.component.scss']
})
export class PaymentPageAltComponent implements OnInit {

  public payment_url: string;

  private slug: string = this.route.snapshot.paramMap.get('slug');
  public model$: Observable<PaymentModel> = this.afs.collection<PaymentModel>(Collections.PAYMENT_MODEL, ref => ref
    .where('slug', '==', this.slug))
    .valueChanges()
    .pipe(
      map(models => models[0]),
    );

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
  ) { }

  ngOnInit() {
  }

}
