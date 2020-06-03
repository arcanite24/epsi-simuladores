import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Collections, Content } from 'src/app/app.models';
import async from 'async'

@Component({
  selector: 'epsi-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent implements OnInit {

  public masterContentId: string = this.route.snapshot.paramMap.get('id')
  public masterContent$: Observable<Content>
  public children$: Observable<Content[]>

  public master: Content
  public l: boolean = false

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {

    this.masterContent$ = this.afs.doc<Content>(`${Collections.CONTENT}/${this.masterContentId}`).valueChanges()
    this.children$ = this.afs.collection<Content>(Collections.CONTENT, ref => ref
      .where('parent_id', '==', this.masterContentId)
      .orderBy('sortIndex', 'asc'))
      .valueChanges()

    this.masterContent$.subscribe(m => this.master = m)

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
