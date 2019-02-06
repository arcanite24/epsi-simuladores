import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'epsi-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {

    this.afs.doc(`${Collections.PAYMENT_MODEL}/L1x4106YUC0BZoARRkib`).update({
      roles: [
        "isEsencial",
        "isContent",
        "isChecklist",
        "isCalendar",
        "isTopUsers",
        "isGalleries",
        "isSimuladores",
        "isForum",
        "isStreaming",
        "isMedia",
        "isSlides",
        "isSimulacros",
        "isFeed"
      ]
    })

    this.afs.doc(`${Collections.PAYMENT_MODEL}/nnnkMH5WadVMXTNN0AFu`).update({
      roles: [
        "isPremium",
        "isContent",
        "isChecklist",
        "isCalendar",
        "isTopUsers",
        "isGalleries",
        "isSimuladores",
        "isForum",
        "isStreaming",
        "isMedia",
        "isSlides",
        "isSimulacros",
        "isFeed"
      ]
    })

  }

}
