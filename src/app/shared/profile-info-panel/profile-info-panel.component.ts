import { Component, OnInit } from '@angular/core';
import { User, Collections } from 'src/app/app.models';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from '@angular/fire/auth';
import { take } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'epsi-profile-info-panel',
  templateUrl: './profile-info-panel.component.html',
  styleUrls: ['./profile-info-panel.component.scss']
})
export class ProfileInfoPanelComponent implements OnInit {

  public user: User
  public loading: boolean = false

  constructor(
    public auth: AuthService,
    private toastr: ToastrService,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {

    this.auth.user$.subscribe(user => this.user = { ...user })

  }

  async saveChanges({ displayName, new_email, universidad, celular, especialidad, about, lugar_origen, uid }: User) {

    try {
      // TODO: Find a better way to validate data without reactive forms
      if (!this.user.displayName) return this.toastr.error('El nombre es obligatorio...')
      
      this.loading = true

      await this.auth.setUser({
        displayName,
        uid,
        new_email,
        universidad,
        celular,
        especialidad,
        about,
        lugar_origen
      })

      const user = await this.afAuth.user.pipe(take(1)).toPromise()
      await user.updateProfile({
        displayName: this.user.displayName,
        photoURL: this.user.photoURL
      })

      this.toastr.success('Información actualizada correctamente.')
      this.loading = false
    } catch (error) {
      this.toastr.error('Por favor llena toda la información...')
      this.loading = false
    }

  }

  async changePhoto(url: string, uid: string, name: string) {
    await this.afs.doc(`${Collections.USER}/${uid}`).update({photoURL: url})
    await this.afAuth.auth.currentUser.updateProfile({
      displayName: name,
      photoURL: url
    })
  }

}
