import { Component, OnInit, Input } from '@angular/core';
import { Tutorial, Collections } from 'src/app/app.models';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'epsi-tutorial-button',
  templateUrl: './tutorial-button.component.html',
  styleUrls: ['./tutorial-button.component.scss']
})
export class TutorialButtonComponent implements OnInit {

  @Input() public tutorial: string
  public tutorial$: Observable<Tutorial>

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    if (this.tutorial) this.tutorial$ = this.afs.collection(Collections.TUTORIAL).doc<Tutorial>(this.tutorial).valueChanges()
  }

}
