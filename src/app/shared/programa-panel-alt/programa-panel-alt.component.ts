import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Collections, Content} from 'src/app/app.models';
import { Observable } from 'rxjs';
import { contentHierarchy } from 'src/app/app.config';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import {map, tap} from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'epsi-programa-panel-alt',
  templateUrl: './programa-panel-alt.component.html',
  styleUrls: ['./programa-panel-alt.component.scss']
})
export class ProgramaPanelAltComponent implements OnInit {

  private mainContent: string = [...contentHierarchy].shift();
  public content: Content[];

  constructor(
    public auth: AuthService,
    public router: Router,
    private data: DataService,
  ) { }

  ngOnInit() {
    this.loadContent();
  }

  async loadContent() {
    this.content = await this.data
      .getCollectionQueryAlt<Content>(Collections.CONTENT, 'type', '==', this.mainContent);
    console.log(this.content);
  }

  public isBlur(name: string): boolean {
    return false;
    // if (!this.auth.user) { return true; }
    // if (!name) { return true; }
    // if (this.auth.isAdmin) { return false; }
    // if (this.auth.isZamna360_2019) { return false; }
    // if (this.auth.isPremium2019) { return false; }
    // if (name.toLowerCase().includes('temprano')) {
    //   return !this.auth.isTemprano;
    // }
    // return false;
  }

  public isLiberado(content: Content): boolean {
    return true;
    // if (!this.auth.user) { return false; }
    // if (this.auth.user.isAdmin) { return true; }

    // if (this.auth.user.isPremium2019) { return true; }

    // return content.liberadoInPrograma;
  }

}
