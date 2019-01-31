import { Component, OnInit, Input } from '@angular/core';
import { Content, Collections } from 'src/app/app.models';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'epsi-content-child-list',
  templateUrl: './content-child-list.component.html',
  styleUrls: ['./content-child-list.component.scss']
})
export class ContentChildListComponent implements OnInit {

  @Input() public master: Content
  @Input() public isMaster: boolean = false
  @Input() public showChildren: boolean = false

  public children$: Observable<Content[]>
  public haveChildren: boolean = false

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {

    this.children$ = this.afs.collection<Content>(Collections.CONTENT, ref => ref.where('parent_id', '==', this.master.id))
      .valueChanges()
      .pipe(
        map(children => children.map(c => ({...c, showChildren: false, haveChildren: false}))),
        tap(children => this.haveChildren = children.length > 0)
      )

    this.children$.subscribe(children => this.haveChildren = children.length > 0)

  }

}
