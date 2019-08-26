import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Tutorial, Collections } from 'src/app/app.models';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'epsi-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() public title: string;
  @Input() public desc: string;
  @Input() public showContent: boolean = true;
  @Input() public blur: boolean = false;
  @Input() public img: string;
  @Input() public height: string;
  @Input() public tutorial: string;
  @Input() public toggleText: string;

  @Input() public titleHref: string;
  @Input() public titleButtonText: string;

  public tutorial$: Observable<Tutorial>;

  constructor(
    private afs: AngularFirestore,
    public modal: NgxSmartModalService
  ) { }

  ngOnInit() {
    if (this.tutorial) this.tutorial$ = this.afs
      .collection(Collections.TUTORIAL)
      .doc<Tutorial>(this.tutorial)
      .valueChanges()
      .pipe(tap(null));
  }

}
