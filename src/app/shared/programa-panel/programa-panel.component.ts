import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Programa, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'epsi-programa-panel',
  templateUrl: './programa-panel.component.html',
  styleUrls: ['./programa-panel.component.scss']
})
export class ProgramaPanelComponent implements OnInit {

  public programas$: Observable<Programa[]>
  public children: any[] = []

  public loadedParents: string[] = []
  public lastRoot: string = ''

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.programas$ = this.afs.collection<Programa>(Collections.PROGRAMA, ref => ref
      .where('parent', '==', null))
      .valueChanges()
  }

  onChildrenLoaded(children: Programa[], parent_id: string) {

    console.log(children, parent_id, this.lastRoot);

    if (this.lastRoot != parent_id) {
      this.children = []
      this.loadedParents = []
    }

    if (this.loadedParents.indexOf(parent_id) >= 0) return

    this.loadedParents.push(parent_id)
    this.children = [...this.children, children]
    this.lastRoot = parent_id

  }

  onSubLoaded(children: Programa[], parent_id: string) {
    console.log(children);
    if (!children || children.length <= 0) return
    if (this.loadedParents.indexOf(parent_id) >= 0) return
    this.loadedParents.push(parent_id)
    this.children = [...this.children, children]
  }

}
