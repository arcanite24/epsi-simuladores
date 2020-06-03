import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/services/stats.service';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { Roles, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'epsi-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  public isProd = environment.production;
  public roles = Object.entries(Roles);

  constructor(
    public auth: AuthService,
    public pay: PaymentService,
    private afs: AngularFirestore,
    private stats: StatsService,
    private toast: ToastrService,
  ) { }

  ngOnInit() {
    this.stats.modifyCounter('visitas_perfil', 1);
  }

  async setRole(user: string, role: string, delta: boolean = true) {
    await this.afs.collection(Collections.USER).doc(user).update({ [role]: delta });
    this.toast.success(`${role} set to ${delta}`);
  }

}
