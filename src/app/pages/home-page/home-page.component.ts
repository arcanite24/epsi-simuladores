import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {
  Collections,
  PaymentModel,
  HomeLists,
  ExamTypes,
  Exam,
  MoodRate,
  Daily,
  Premium2019Model
} from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { trigger, transition, style, animate, state, keyframes } from '@angular/animations';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { DataService } from 'src/app/services/data.service';
import moment from 'moment';
import { environment } from 'src/environments/environment';
import { PaymentService } from 'src/app/services/payment.service';

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

  public modelEsencial$: Observable<PaymentModel> = this.afs
    .doc<PaymentModel>(`${Collections.PAYMENT_MODEL}/L1x4106YUC0BZoARRkib`)
    .valueChanges();
  public modelPremium$: Observable<PaymentModel> = this.afs
    .doc<PaymentModel>(`${Collections.PAYMENT_MODEL}/nnnkMH5WadVMXTNN0AFu`)
    .valueChanges();

  public mood = {
    mood: 1,
    text: ''
  };

  public selectedMood: number;

  public daily: Daily;

  public showGlobalWarn = false;

  constructor(
    public auth: AuthService,
    public pay: PaymentService,
    private afs: AngularFirestore,
    private modal: NgxSmartModalService,
    private data: DataService,
  ) { }

  ngOnInit() {

    /*this.buildModels();*/
    /* this.buildLists() */

    this.auth.user$.subscribe(user => {
      if (user) {
        if (!this.pay.isComprado()) {
          return this.pay.redirectToPayment();
        }
        this.loadMoodRates(user.uid);
      }
    });

  }

  async loadMoodRates(uid: string) {

    const rates = await this.data.getCollectionQuery<MoodRate>(Collections.MOOD_RATE, ref => ref.where('user', '==', uid));
    const dailyRegisters = await this.data.getCollectionQuery<MoodRate>(Collections.DAILY_REGISTER, ref => ref.where('user', '==', uid));
    const today = moment().format('DD-MM-YYYY');
    const canOpen = rates.filter(r => r.date == today).length <= 0;
    const canOpenDaily = rates.filter(r => r.date == today).length <= 0;

    console.log(rates, today);

    if (canOpen) { this.modal.getModal('moodAddModal').open(); }
    if (canOpenDaily) { this.openDaily(uid, today); }

  }

  async openDaily(uid: string, date: string) {
    const dailys = await this.data.getCollection<Daily>(Collections.DAILY);
    if (!dailys || dailys.length <= 0) { return; }
    this.daily = dailys[Math.floor(Math.random() * dailys.length)];

    const noti_id = this.afs.createId();
    await this.afs.collection(Collections.NOTIFICATION).doc(noti_id).set({
      id: noti_id,
      title: this.daily.title,
      text: this.daily.text,
      date: new Date().toISOString(),
      isGlobal: false,
      user: uid
    });

    const id = this.afs.createId();
    await this.afs.collection(Collections.DAILY_REGISTER).doc(id).set({
      id,
      user: uid,
      date,
      daily: {...this.daily}
    });
  }

  sendMood(mood: number, text: string) {

    if (mood === -1) {
      this.afs.collection(Collections.MOOD_RATE).add({
        text,
        mood,
        user: this.auth.user.uid,
        date: moment().format('DD-MM-YYYY'),
      });
      this.modal.getModal('moodAddModal').close();
    } else {
      this.selectedMood = mood;
    }

  }

  async sendFinalMood(mood: number, text: string) {
    this.afs.collection(Collections.MOOD_RATE).add({
      text,
      mood,
      user: this.auth.user.uid,
      date: moment().format('DD-MM-YYYY'),
    });
    this.modal.getModal('moodAddModal').close();
  }

  async buildLists() {

    const simuladores = await this.afs.collection(Collections.EXAM, ref => ref
      .where('type', '==', ExamTypes.SIMULADOR))
      .valueChanges()
      .pipe(
        take(1)
      ).toPromise();

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
    });

    const simulacros = await this.afs.collection(Collections.EXAM, ref => ref
      .where('type', '==', ExamTypes.SIMULACRO))
      .valueChanges()
      .pipe(
        take(1)
      ).toPromise();

    await this.afs.doc(`${Collections.LIST}/${HomeLists.SimulacrosList}`).set({
      id: HomeLists.SimulacrosList,
      key: HomeLists.SimulacrosList,
      name: 'Simulacros List',
      list: simulacros.map((s: Exam) => ({
        name: s.name,
        id: s.id,
        type: s.type
      }))
    });

  }

  buildModels() {

    /*this.afs.doc(`${Collections.PAYMENT_MODEL}/L1x4106YUC0BZoARRkib`).update({
      packs: [
        {quantity: 2, label: '2 Personas', price: 1691},
        {quantity: 3, label: '3 Personas', price: 2136},
        {quantity: 4, label: '4 Personas', price: 2687},
        {quantity: 5, label: '5 Personas', price: 3123},
        {quantity: 10, label: '10 Personas', price: 4005},
      ]
    })*/

    const premium2019Roles = [];

    for (const role of Premium2019Model) {
      premium2019Roles.push(role);
    }

    console.log(premium2019Roles);

    this.afs.doc(`${Collections.PAYMENT_MODEL}/nnnkMH5WadVMXTNN0AFu`).update({
      unlocks: premium2019Roles,
      packs: [
        {quantity: 2, label: '2 Personas', price: 10198},
        {quantity: 3, label: '3 Personas', price: 13261},
        {quantity: 4, label: '4 Personas', price: 15859},
        {quantity: 5, label: '5 Personas', price: 17306},
        {quantity: 10, label: '10 Personas', price: 22161},
      ]
    });

  }

  unlockedPremiumUpgrade(): boolean {
    if (this.auth.isPremium2019) { return false; }
    if (this.auth.isPremium) { return false; }
    if (this.auth.isZamna360_2019) { return false; }
    if (this.auth.isPresencial) { return false; }
    return true;
  }

  removeNoCalendar() {
    this.afs.collection(Collections.USER).doc(this.auth.user.uid).update({noCalendar: false});
  }

}
