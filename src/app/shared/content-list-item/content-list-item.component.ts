import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Content, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { AuthService } from 'src/app/services/auth.service';
import async from 'async'

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
  @Input() public index: number
  @Input() public length: number

  @Output() public moveUp: EventEmitter<{content: Content, oldIndex: number}> = new EventEmitter()
  @Output() public moveDown: EventEmitter<{content: Content, oldIndex: number}> = new EventEmitter()

  public showChildren: boolean = false
  public haveChildren: boolean = false
  public l: boolean = false

  public children$: Observable<Content[]>

  constructor(
    private afs: AngularFirestore,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.children$ = this.afs.collection<Content>(Collections.CONTENT, ref => ref
      .where('parent_id', '==', this.content.id)
      .orderBy('sortIndex', 'asc'))
      .valueChanges()
      .pipe(
        tap(c => this.haveChildren = c.length > 0)
      )
  }

  async moveContent(snapshot: Content[], oldIndex: number, newIndex: number) {

    console.log(oldIndex, newIndex, snapshot.length)
    if (!snapshot) return
    if (newIndex < 0) return
    if (newIndex > snapshot.length) return

    this.l = true
    console.log('old indexes', snapshot.map(c => c.name))

    const sortedArray = this.array_move(snapshot, oldIndex, newIndex)
    
    async.eachOf(sortedArray, async (c: Content, i: number, next: Function) => {
      this.afs.collection(Collections.CONTENT).doc(c.id).update({sortIndex: i})
      next()
    }, () => {
      this.l = false
      console.log('new indexes', sortedArray.map(c => c.name))
    })

  }

  array_move(_arr: any[], old_index: number, new_index: number): any[] {
    let arr = [..._arr]
    if (new_index >= arr.length) {
      let k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined)
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0])
    return arr
  }

  trackByFn(i: number, content: Content) {
    return content.sortIndex
  }

}
