import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Content } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'epsi-content-tree',
  templateUrl: './content-tree.component.html',
  styleUrls: ['./content-tree.component.scss']
})
export class ContentTreeComponent implements OnInit {

  @Input() hierarchy: string[] = ['materia', 'bloque', 'tema', 'subtema']
  public content$: Observable<any[]> = this.afs.collection<any>('content').valueChanges()

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
  }

  getContentTree(content: Content[]): any[] {
    const key = this.hierarchy.shift()
    console.log(key)
    return content.filter(c => c.type == key)
  }

}
