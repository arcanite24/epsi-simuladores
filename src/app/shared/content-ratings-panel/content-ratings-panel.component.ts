import { Component, OnInit, Input } from '@angular/core';
import { contentRatings } from 'src/app/app.config';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Rating, Collections, Content } from 'src/app/app.models';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'epsi-content-ratings-panel',
  templateUrl: './content-ratings-panel.component.html',
  styleUrls: ['./content-ratings-panel.component.scss']
})
export class ContentRatingsPanelComponent implements OnInit {

  @Input() public parent_type: string
  @Input() public parent_id: string
  @Input() public content_type: string
  @Input() public content: Content

  public contentRatings = [ ...contentRatings ]
  public ratingsModel = {}

  private ratingKey: string
  public rating$: Observable<Rating>

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

    this.auth.user$.subscribe(user => {

      if (!user && !this.rating$) return
      //console.log(this.parent_type, this.parent_id, this.content_type, this.content)

      // Generates the key for the userRating
      this.ratingKey = `${this.parent_id}-${user.uid}`
      this.rating$ = this.afs.doc<Rating>(`${Collections.RATING}/${this.ratingKey}`).valueChanges()

      // This loads the current user rating for the specific content
      this.rating$.subscribe(ratings => {
        this.ratingsModel = ratings ? ratings : {id: this.ratingKey}
      })

    })

  }

  async updateRating(key: string, value: number) {

    if (isNaN(value)) return
    console.log(`updateing rating "${key}" to "${value}"`);

    const content = await this.afs.doc<Content>(`${Collections.CONTENT}/${this.parent_id}`).valueChanges().pipe(take(1)).toPromise()
    if (!content.totalRatings) content.totalRatings = 0
    if (!content.ratings) content.ratings = {}
    if (!content.ratings[key]) content.ratings[key] = 0

    content.totalRatings++
    // content.ratings[key] = (content.ratings[key] + value) / content.totalRatings

    await this.afs.doc(`${Collections.RATING}/${this.ratingKey}`).set({id: this.ratingKey, [key]: value, parent: this.parent_id}, {merge: true})
    this.toastr.success('Gracias por tu calificación.')

    // Calculate rating every update (might not be the best idea until we find another thing)
    const rating = await this.afs.collection<Rating>(Collections.RATING, ref => ref
      .where('parent', '==', this.parent_id))
      .valueChanges()
      .pipe(
        take(1),
        map(ratings => ratings.map(r => r[key]).reduce((a, b) => a + b, 0))
      ).toPromise()

    content.ratings[key] = rating
    console.log(content.ratings)
    await this.afs.doc(`${Collections.CONTENT}/${this.parent_id}`).update({ratings: content.ratings, totalRatings: content.totalRatings})

  }

}
