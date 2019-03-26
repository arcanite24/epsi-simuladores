import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Collections } from 'src/app/app.models';
import { Observable } from 'rxjs';
import { contentHierarchy } from 'src/app/app.config';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'epsi-programa-panel-alt',
  templateUrl: './programa-panel-alt.component.html',
  styleUrls: ['./programa-panel-alt.component.scss']
})
export class ProgramaPanelAltComponent implements OnInit {

  private mainContent: string = [...contentHierarchy].shift()
  public content$: Observable<Content[]>

  constructor(
    private afs: AngularFirestore,
    public auth: AuthService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.content$ = this.afs.collection<Content>(Collections.CONTENT, ref => ref.where('type', '==', this.mainContent)).valueChanges()
  }

  public isBlur(name: string): boolean {
    if (!this.auth.user) return true
    if (!name) return true
    if (this.auth.isAdmin) return false
    if (name.toLowerCase().includes('temprano')) {
      return !this.auth.isTemprano
    }
    return true
  }

}
