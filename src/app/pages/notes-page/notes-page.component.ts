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
            map(notes => Object.values(groupBy(notes.filter(n => n.content_type != 'event'))))
          )
      }
    })

  }

  openNote(note: Note) {
    this.tempNote = note
    this.modal.getModal('noteDetailModal').open()
  }

  exportNotes(notes: Note[][] = []) {

    let text = ''

    for (const cat of notes) {
      text += `**${cat[0].content_type}**\n`
      for (const note of cat) {
        text += `${note.title}\n${note.text}\n\n`
      }
    }

    const uri = this.makeTextFile(text)
    this.downloadURI(uri, `notas-zamandemy-${new Date().toDateString()}.txt`)

  }

  private makeTextFile(text) {
    var textFile = null
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    // returns a URL you can use as a href
    return textFile;
  }

  private downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
