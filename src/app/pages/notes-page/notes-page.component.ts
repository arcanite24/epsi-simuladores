import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Note, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { groupBy } from 'lodash'
import { AuthService } from 'src/app/services/auth.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'epsi-notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.scss']
})
export class NotesPageComponent implements OnInit {

  public notes$: Observable<Note[][]>
  public tempNote: Note

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService,
    private modal: NgxSmartModalService
  ) {}

  ngOnInit() {

    this.auth.user$.subscribe(user => {
      if (user && !this.notes$) {
        this.notes$ = this.afs.collection<Note>(Collections.NOTE, ref => ref
          .where('user', '==', user.uid))
          .valueChanges()
          .pipe(
            map(notes => Object.values(groupBy(notes)))
          )
      }
    })

  }

  openNote(note: Note) {
    this.tempNote = note
    this.modal.getModal('noteDetailModal').open()
  }

}
