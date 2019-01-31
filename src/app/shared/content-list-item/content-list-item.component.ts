import { Component, OnInit, Input } from '@angular/core';
import { Content, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'epsi-content-list-item',
  templateUrl: './content-list-item.component.html',
  styleUrls: ['./content-list-item.component.scss'],
  animations: [
    trigger('animateItem', [      
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300)
      ]),
      transition(':leave', [
        animate(300, style({ opacity: 1 }))
      ]),
      state('*', style({ opacity: 1 })),
    ])
  ]
})
export class ContentListItemComponent implements OnInit {

  @Input() public content: Content

  public showChildren: boolean = false
  public haveChildren: boolean = false

  public children$: Observable<Content[]>

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.children$ = this.afs.collection<Content>(Collections.CONTENT, ref => ref.where('parent_id', '==', this.content.id))
      .valueChanges()
      .pipe(
        tap(c => this.haveChildren = c.length > 0)
      )
  }

}
