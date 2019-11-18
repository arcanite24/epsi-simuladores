import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { Post, Collections } from 'src/app/app.models';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'epsi-feed-panel',
  templateUrl: './feed-panel.component.html',
  styleUrls: ['./feed-panel.component.scss']
})
export class FeedPanelComponent implements OnInit {

  public postForm: FormGroup = this.fb.group({
    id: this.afs.createId(),
    text: ['', Validators.required],
    date: new Date().toISOString(),
    user: null,
    image: null,
    likes: [[]]
  });

  public posts$: Observable<Post[]>;

  constructor(
    public pay: PaymentService,
    private fb: FormBuilder,
    private afs: AngularFirestore,
    private auth: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

    this.auth.user$.subscribe(user => {
      if (!user) { return; }
      this.postForm.patchValue({user});
    });

    this.posts$ = this.afs.collection<Post>(Collections.POST, ref => ref.orderBy('date', 'desc')).valueChanges();

  }

  imageUploaded(url: string) {
    this.postForm.patchValue({image: url});
  }

  async submitForm(post: Post) {

    this.postForm.patchValue({date: new Date().toISOString()});

    if (this.postForm.valid) {
      await this.afs.doc(`${Collections.POST}/${post.id}`).set({...post});
      this.toastr.success('Post creado correctamente.');
      this.postForm.reset();
    } else {
      this.toastr.error('Por favor ingresa infromación válida...');
    }

  }

}
