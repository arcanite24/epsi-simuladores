import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Custom Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ToastrModule } from 'ngx-toastr';
import { NgAisModule } from 'angular-instantsearch';
import { NgbRatingModule, NgbTimepickerModule, NgbCarouselModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgxGalleryModule } from 'ngx-gallery';
import { TagInputModule } from 'ngx-chips'
import { NgxChartsModule } from '@swimlane/ngx-charts'

// Store
import { StoreModule } from '@ngrx/store';

// Videoplayer modules
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfileInfoPanelComponent } from './shared/profile-info-panel/profile-info-panel.component';
import { PanelComponent } from './shared/panel/panel.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { AdminTileComponent } from './shared/admin-tile/admin-tile.component';
import { AdminUsersPageComponent } from './pages/admin-users-page/admin-users-page.component';
import { CrudTableComponent, RemoveHiddenPipe } from './shared/crud-table/crud-table.component';
import { CrudTableFullEditComponent } from './shared/crud-table-full-edit/crud-table-full-edit.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { FilterByCatalog, FilterByPartner, RemoveGoFast, ShuffleArray } from './shared/crud-table/crud-table-pipes';
import { StorageUploaderComponent } from './shared/storage-uploader/storage-uploader.component';
import { AdminContentPageComponent } from './pages/admin-content-page/admin-content-page.component';
import { ContentAddComponent } from './shared/content-add/content-add.component';
import { ContentEditComponent } from './shared/content-edit/content-edit.component';
import { ContentTreeComponent } from './shared/content-tree/content-tree.component';
import { AdminGalleriesComponent } from './pages/admin-galleries/admin-galleries.component';
import { GalleryEditComponent } from './shared/gallery-edit/gallery-edit.component';
import { AdminMediaComponent } from './pages/admin-media/admin-media.component';
import { MediaEditComponent } from './shared/media-edit/media-edit.component';
import { PagesComponent } from './pages/pages.component';
import { QuestionEditComponent } from './shared/question-edit/question-edit.component';
import { AdminQuestionsComponent } from './pages/admin-questions/admin-questions.component';
import { AnswerEditItemComponent } from './shared/answer-edit-item/answer-edit-item.component';
import { SearchComponent } from './shared/search/search.component';
import { AdminExamsComponent } from './pages/admin-exams/admin-exams.component';
import { ExamEditComponent } from './shared/exam-edit/exam-edit.component';
import { AdminAsesoriasComponent } from './pages/admin-asesorias/admin-asesorias.component';
import { AdminSlidesComponent } from './pages/admin-slides/admin-slides.component';
import { SlideEditComponent } from './shared/slide-edit/slide-edit.component';
import { ChecklistPanelComponent } from './shared/checklist-panel/checklist-panel.component';
import { AdminTodoComponent } from './pages/admin-todo/admin-todo.component';
import { ChecklistItemComponent } from './shared/checklist-item/checklist-item.component';
import { ContentPanelComponent } from './shared/content-panel/content-panel.component';
import { CalendarPanelComponent } from './shared/calendar-panel/calendar-panel.component';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { ContentChildListComponent } from './shared/content-child-list/content-child-list.component';
import { ContentDetailPageComponent } from './pages/content-detail-page/content-detail-page.component';
import { AdminNotesComponent } from './pages/admin-notes/admin-notes.component';
import { ContentNotesPanelComponent } from './shared/content-notes-panel/content-notes-panel.component';
import { ContentCommentsPanelComponent } from './shared/content-comments-panel/content-comments-panel.component';
import { AdminCommentsComponent } from './pages/admin-comments/admin-comments.component';
import { ContentRatingsPanelComponent } from './shared/content-ratings-panel/content-ratings-panel.component';
import { ContentVideoPanelComponent } from './shared/content-video-panel/content-video-panel.component';
import { ContentVideoSuggestionAddComponent } from './shared/content-video-suggestion-add/content-video-suggestion-add.component';
import { AdminSuggestionsComponent } from './pages/admin-suggestions/admin-suggestions.component';
import { ContentMarkersPanelComponent } from './shared/content-markers-panel/content-markers-panel.component';
import { AdminEventsComponent } from './pages/admin-events/admin-events.component';
import { CalendarDayWidgetComponent } from './shared/calendar-day-widget/calendar-day-widget.component';
import { CalendarEventsModalComponent } from './shared/calendar-events-modal/calendar-events-modal.component';
import { EventDetailComponent } from './shared/event-detail/event-detail.component';
import { EventEditComponent } from './shared/event-edit/event-edit.component';
import { GalleriesPanelComponent } from './shared/galleries-panel/galleries-panel.component';
import { GalleriesPanelItemComponent } from './shared/galleries-panel-item/galleries-panel-item.component';
import { GalleryDetailPageComponent } from './pages/gallery-detail-page/gallery-detail-page.component';
import { AdminForumComponent } from './pages/admin-forum/admin-forum.component';
import { ThreadCategoryDetailPageComponent } from './pages/thread-category-detail-page/thread-category-detail-page.component';
import { ThreadDetailPageComponent } from './pages/thread-detail-page/thread-detail-page.component';
import { ForumPanelComponent } from './shared/forum-panel/forum-panel.component';
import { ThreadAddComponent } from './shared/thread-add/thread-add.component';
import { ThreadRepliesWidgetComponent } from './shared/thread-replies-widget/thread-replies-widget.component';
import { LivestreamsPanelComponent } from './shared/livestreams-panel/livestreams-panel.component';
import { AdminLivestreamsComponent } from './pages/admin-livestreams/admin-livestreams.component';
import { LivestreamDetailPageComponent } from './pages/livestream-detail-page/livestream-detail-page.component';
import { MediaPanelComponent } from './shared/media-panel/media-panel.component';
import { MediaDetailPageComponent } from './pages/media-detail-page/media-detail-page.component';
import { SlidesPanelComponent } from './shared/slides-panel/slides-panel.component';
import { SlideDetailPageComponent } from './pages/slide-detail-page/slide-detail-page.component';
import { SlidesListPageComponent } from './pages/slides-list-page/slides-list-page.component';
import { SlidesListItemComponent } from './shared/slides-list-item/slides-list-item.component';
import { SimuladoresPanelComponent } from './shared/simuladores-panel/simuladores-panel.component';
import { ExamDetailPageComponent } from './pages/exam-detail-page/exam-detail-page.component';
import { ExamQuestionsWidgetComponent } from './shared/exam-questions-widget/exam-questions-widget.component';
import { ExamProgressWidgetComponent } from './shared/exam-progress-widget/exam-progress-widget.component';
import { ExamResultsWidgetComponent } from './shared/exam-results-widget/exam-results-widget.component';
import { examReducer } from './reducers/exam.reducer';
import { ExamResultsPageComponent } from './pages/exam-results-page/exam-results-page.component';
import { SimulacrosPanelComponent } from './shared/simulacros-panel/simulacros-panel.component';
import { FeedPanelComponent } from './shared/feed-panel/feed-panel.component';
import { FeedPostItemComponent } from './shared/feed-post-item/feed-post-item.component';
import { PostCommentComponent } from './shared/post-comment/post-comment.component';
import { FeedPostCommentsComponent } from './shared/feed-post-comments/feed-post-comments.component';
import { StatUserGeneralAverageComponent } from './shared/stat-user-general-average/stat-user-general-average.component';
import { StatUserMonthAverageComponent } from './shared/stat-user-month-average/stat-user-month-average.component';
import { AdminTagsComponent } from './pages/admin-tags/admin-tags.component';
import { StatUserPerformanceComponent } from './shared/stat-user-performance/stat-user-performance.component';
import { AdminStatsComponent } from './pages/admin-stats/admin-stats.component';
import { StatViewAdminPanelComponent } from './shared/stat-view-admin-panel/stat-view-admin-panel.component';
import { StatViewAddComponent } from './shared/stat-view-add/stat-view-add.component';
import { StatViewEditComponent } from './shared/stat-view-edit/stat-view-edit.component';
import { TagSearchComponent } from './shared/tag-search/tag-search.component';
import { StatViewDetailComponent } from './shared/stat-view-detail/stat-view-detail.component';
import { StatUserTimelineComponent } from './shared/stat-user-timeline/stat-user-timeline.component';
import { StatUserTagsAverageComponent } from './shared/stat-user-tags-average/stat-user-tags-average.component';
import { StatStructureAdminPanelComponent } from './stat-structure-admin-panel/stat-structure-admin-panel.component';
import { StatUserStructurePanelComponent } from './shared/stat-user-structure-panel/stat-user-structure-panel.component';
import { StatStructureItemComponent } from './shared/stat-structure-item/stat-structure-item.component';
import { TopUsersPanelComponent } from './shared/top-users-panel/top-users-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    AdminPageComponent,
    NavbarComponent,
    ProfilePageComponent,
    ProfileInfoPanelComponent,
    PanelComponent,
    LoaderComponent,
    AdminTileComponent,
    AdminUsersPageComponent,
    CrudTableComponent,
    CrudTableFullEditComponent,
    FilterByCatalog,
    FilterByPartner,
    RemoveGoFast,
    ShuffleArray,
    RemoveHiddenPipe,
    StorageUploaderComponent,
    AdminContentPageComponent,
    ContentAddComponent,
    ContentEditComponent,
    ContentTreeComponent,
    AdminGalleriesComponent,
    GalleryEditComponent,
    AdminMediaComponent,
    MediaEditComponent,
    PagesComponent,
    QuestionEditComponent,
    AdminQuestionsComponent,
    AnswerEditItemComponent,
    SearchComponent,
    AdminExamsComponent,
    ExamEditComponent,
    AdminAsesoriasComponent,
    AdminSlidesComponent,
    SlideEditComponent,
    ChecklistPanelComponent,
    AdminTodoComponent,
    ChecklistItemComponent,
    ContentPanelComponent,
    CalendarPanelComponent,
    ContentPageComponent,
    ContentChildListComponent,
    ContentDetailPageComponent,
    AdminNotesComponent,
    ContentNotesPanelComponent,
    ContentCommentsPanelComponent,
    AdminCommentsComponent,
    ContentRatingsPanelComponent,
    ContentVideoPanelComponent,
    ContentVideoSuggestionAddComponent,
    AdminSuggestionsComponent,
    ContentMarkersPanelComponent,
    AdminEventsComponent,
    CalendarDayWidgetComponent,
    CalendarEventsModalComponent,
    EventDetailComponent,
    EventEditComponent,
    GalleriesPanelComponent,
    GalleriesPanelItemComponent,
    GalleryDetailPageComponent,
    AdminForumComponent,
    ThreadCategoryDetailPageComponent,
    ThreadDetailPageComponent,
    ForumPanelComponent,
    ThreadAddComponent,
    ThreadRepliesWidgetComponent,
    LivestreamsPanelComponent,
    AdminLivestreamsComponent,
    LivestreamDetailPageComponent,
    MediaPanelComponent,
    MediaDetailPageComponent,
    SlidesPanelComponent,
    SlideDetailPageComponent,
    SlidesListPageComponent,
    SlidesListItemComponent,
    SimuladoresPanelComponent,
    ExamDetailPageComponent,
    ExamQuestionsWidgetComponent,
    ExamProgressWidgetComponent,
    ExamResultsWidgetComponent,
    ExamResultsPageComponent,
    SimulacrosPanelComponent,
    FeedPanelComponent,
    FeedPostItemComponent,
    PostCommentComponent,
    FeedPostCommentsComponent,
    StatUserGeneralAverageComponent,
    StatUserMonthAverageComponent,
    AdminTagsComponent,
    StatUserPerformanceComponent,
    AdminStatsComponent,
    StatViewAdminPanelComponent,
    StatViewAddComponent,
    StatViewEditComponent,
    TagSearchComponent,
    StatViewDetailComponent,
    StatUserTimelineComponent,
    StatUserTagsAverageComponent,
    StatStructureAdminPanelComponent,
    StatUserStructurePanelComponent,
    StatStructureItemComponent,
    TopUsersPanelComponent,
  ],
  imports: [
    TagInputModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      autoDismiss: true
    }),
    NgxSmartModalModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    NgAisModule.forRoot(),
    NgbRatingModule,
    NgbTimepickerModule,
    NgbCarouselModule,
    NgbTypeaheadModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    NgxGalleryModule,
    StoreModule.forRoot({
      exam: examReducer
    }),
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
