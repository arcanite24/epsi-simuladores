import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Collections, Content } from 'src/app/app.models';
import { Observable } from 'rxjs';
import { contentHierarchy } from 'src/app/app.config';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'epsi-content-panel',
  templateUrl: './content-panel.component.html',
  styleUrls: ['./content-panel.component.scss']
})
export class ContentPanelComponent implements OnInit {

  private mainContent: string = [...contentHierarchy].shift();
  public content$: Observable<Content[]>;

  constructor(
    public auth: AuthService,
    public router: Router,
    private afs: AngularFirestore,
    private pay: PaymentService,
  ) { }

  ngOnInit() {
    this.content$ = this.afs.collection<Content>(Collections.CONTENT, ref => ref
      .where('type', '==', this.mainContent))
      .valueChanges();
  }

  public isBlur(name: string): boolean {
    if (!this.auth.user) { return true; }
    if (!name) { return true; }
    if (this.auth.isAdmin) { return false; }
    if (name.toLowerCase().includes('temprano')) {
      if (this.auth.isLight2020) { return true; }
      if (this.auth.isPremium2020) { return true; }
    }
    return true;
  }

}
