import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { PaymentService } from './payment.service';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(
    private auth: AuthService,
    private pay: PaymentService,
  ) { }

  /**
   * isCalendarUnlocked
   */
  public isCalendarUnlocked(): boolean {
    if (this.auth.isPremium2020) return true;
    if (this.pay.isComplete()) return true;
    if (this.auth.isLight2020) return false;
    return true;
  }

  /**
   * isSimulacrosUnlocked
   */
  public isSimulacrosUnlocked() {
    if (this.auth.isPremium2020) return true;
    if (this.pay.isModular()) return false;
    return false;
  }

}
