import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Collections, PaymentModel, HomeLists, ExamTypes, Exam } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { trigger, transition, style, animate, state, keyframes } from '@angular/animations';

@Component({
  selector: 'epsi-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger('animateItem', [      
      transition(':enter', [
        style({ opacity: 1 })
      ]),
      transition(':leave', [
        animate(1500, style({ opacity: 0 }))
        /* animate('3s', keyframes([
          style({ opacity: 0, offset: 1 })
        ])) */
      ]),
      state('*', style({ opacity: 1 })),
    ])
  ]
})
export class HomePageComponent implements OnInit {

  public modelEsencial$: Observable<PaymentModel> = this.afs.doc<PaymentModel>(`${Collections.PAYMENT_MODEL}/L1x4106YUC0BZoARRkib`).valueChanges()
  public modelPremium$: Observable<PaymentModel> = this.afs.doc<PaymentModel>(`${Collections.PAYMENT_MODEL}/nnnkMH5WadVMXTNN0AFu`).valueChanges()

  constructor(
    public auth: AuthService,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    /* this.buildLists() */
  }

  async buildLists() {

    const simuladores = await this.afs.collection(Collections.EXAM, ref => ref
      .where('type', '==', ExamTypes.SIMULADOR))
      .valueChanges()
      .pipe(
        take(1)
      ).toPromise()

    await this.afs.doc(`${Collections.LIST}/${HomeLists.SimuladoresList}`).set({
      id: HomeLists.SimuladoresList,
      key: HomeLists.SimuladoresList,
      name: 'Simuladores List',
      list: simuladores.map((s: Exam) => ({
        name: s.name,
        id: s.id,
        type: s.type,
        date: s.date,
      }))
    })

    const simulacros = await this.afs.collection(Collections.EXAM, ref => ref
      .where('type', '==', ExamTypes.SIMULACRO))
      .valueChanges()
      .pipe(
        take(1)
      ).toPromise()

    await this.afs.doc(`${Collections.LIST}/${HomeLists.SimulacrosList}`).set({
      id: HomeLists.SimulacrosList,
      key: HomeLists.SimulacrosList,
      name: 'Simulacros List',
      list: simulacros.map((s: Exam) => ({
        name: s.name,
        id: s.id,
        type: s.type
      }))
    })

  }

  buildModels() {

    this.afs.doc(`${Collections.PAYMENT_MODEL}/L1x4106YUC0BZoARRkib`).update({
      packs: [
        {quantity: 2, label: '2 Personas', price: 1691},
        {quantity: 3, label: '3 Personas', price: 2136},
        {quantity: 4, label: '4 Personas', price: 2687},
        {quantity: 5, label: '5 Personas', price: 3123},
        {quantity: 10, label: '10 Personas', price: 4005},
      ]
    })

    this.afs.doc(`${Collections.PAYMENT_MODEL}/nnnkMH5WadVMXTNN0AFu`).update({
      /* unlocks: [
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
      ] */
      packs: [
        {quantity: 2, label: '2 Personas', price: 10198},
        {quantity: 3, label: '3 Personas', price: 13261},
        {quantity: 4, label: '4 Personas', price: 15859},
        {quantity: 5, label: '5 Personas', price: 17306},
        {quantity: 10, label: '10 Personas', price: 22161},
      ]
    })

  }

}
