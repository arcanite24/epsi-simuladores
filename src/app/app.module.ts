import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { localStorageSync } from 'ngrx-store-localstorage';

// Custom Modules
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgAisModule } from 'angular-instantsearch';
import { NgbRatingModule, NgbTimepickerModule, NgbCarouselModule, NgbTypeaheadModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgxGalleryModule } from 'ngx-gallery';
import { TagInputModule } from 'ngx-chips'
import { NgxChartsModule } from '@swimlane/ngx-charts'
import { MomentModule } from 'ngx-moment'
import { SelectDropDownModule } from 'ngx-select-dropdown'
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import localeEs from '@angular/common/locales/es';
import { Angular2CsvModule } from 'angular2-csv';

registerLocaleData(localeEs)

// Store
import {ActionReducer, MetaReducer, StoreModule} from '@ngrx/store';
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['exam'], rehydrate: true})(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

// Videoplayer modules
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { VgStreamingModule } from 'videogular2/streaming';

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
import { registerLocaleData } from '@angular/common';
import { TerminosModalComponent } from './shared/terminos-modal/terminos-modal.component';
import { ContentListItemComponent } from './shared/content-list-item/content-list-item.component';
import { AdminPaymentModelsComponent } from './pages/admin-payment-models/admin-payment-models.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { PaymentRequestDetailPageComponent } from './pages/payment-request-detail-page/payment-request-detail-page.component';
import { AdminNotificationsComponent } from './pages/admin-notifications/admin-notifications.component';
import { NotificationsModalComponent } from './shared/notifications-modal/notifications-modal.component';
import { PaymentModelPanelComponent } from './shared/payment-model-panel/payment-model-panel.component';
import { UserRolesPanelComponent } from './shared/user-roles-panel/user-roles-panel.component';
import { AdminCouponsComponent } from './page/admin-coupons/admin-coupons.component';
import { AdminIpnComponent } from './pages/admin-ipn/admin-ipn.component';
import { QuestionPoolPanelComponent } from './shared/question-pool-panel/question-pool-panel.component';
import { ToolUploaderComponent } from './shared/tool-uploader/tool-uploader.component';
import { TagsPoolPanelComponent } from './shared/tags-pool-panel/tags-pool-panel.component';
import { TagsPoolModalComponent } from './shared/tags-pool-modal/tags-pool-modal.component';
import { AdminProgramaComponent } from './pages/admin-programa/admin-programa.component';
import { ProgramaEditComponent } from './shared/programa-edit/programa-edit.component';
import { ProgramaPanelComponent } from './shared/programa-panel/programa-panel.component';
import { ProgramaItemComponent } from './shared/programa-item/programa-item.component';
import { AdminStatCountersComponent } from './pages/admin-stat-counters/admin-stat-counters.component';
import { ContentItemComponent } from './shared/content-item/content-item.component';
import { QuestionAddComponent } from './shared/question-add/question-add.component';
import { ExamQuestionsByGroupWidgetComponent } from './shared/exam-questions-by-group-widget/exam-questions-by-group-widget.component';
import { AdminMigrationComponent } from './pages/admin-migration/admin-migration.component';
import { MediaListPageComponent } from './pages/media-list-page/media-list-page.component';
import { MediaListItemComponent } from './shared/media-list-item/media-list-item.component';
import { UserRolesComponent } from './shared/user-roles/user-roles.component';
import { NotesPageComponent } from './pages/notes-page/notes-page.component';
import { ExamFeedbackModalComponent } from './shared/exam-feedback-modal/exam-feedback-modal.component';
import { ResultsPageComponent } from './pages/results-page/results-page.component';
import { ContentErrorModalComponent } from './shared/content-error-modal/content-error-modal.component';
import { ContentErrorAddComponent } from './shared/content-error-add/content-error-add.component';
import { AdminContentErrorComponent } from './pages/admin-content-error/admin-content-error.component';
import { AdminExamRankingsComponent } from './pages/admin-exam-rankings/admin-exam-rankings.component';
import { ExamRankingAddComponent } from './shared/exam-ranking-add/exam-ranking-add.component';
import { AdPitPanelComponent } from './shared/ad-pit-panel/ad-pit-panel.component';
import { AdPremiumUpgradePanelComponent } from './shared/ad-premium-upgrade-panel/ad-premium-upgrade-panel.component';
import { AdminExamStatsPageComponent } from './pages/admin-exam-stats-page/admin-exam-stats-page.component';
import { AdminLandingFieldsComponent } from './pages/admin-landing-fields/admin-landing-fields.component';
import { AdminTagsPoolComponent } from './pages/admin-tags-pool/admin-tags-pool.component';
import { AdminUserStatsComponent } from './pages/admin-user-stats/admin-user-stats.component';
import { UserCouponsPanelComponent } from './shared/user-coupons-panel/user-coupons-panel.component';
import { AdminAdTextsComponent } from './pages/admin-ad-texts/admin-ad-texts.component';
import { UserMoodOverviewComponent } from './shared/user-mood-overview/user-mood-overview.component';
import { UserNotiAddComponent } from './shared/user-noti-add/user-noti-add.component';
import { AdminTutorialsComponent } from './pages/admin-tutorials/admin-tutorials.component';
import { ProgramaPanelAltComponent } from './shared/programa-panel-alt/programa-panel-alt.component';
import { ProgramaAltMateriaPageComponent } from './pages/programa-alt-materia-page/programa-alt-materia-page.component';
import { ProgramaAltBloquePageComponent } from './pages/programa-alt-bloque-page/programa-alt-bloque-page.component';
import { PlanSelectorPanelComponent } from './shared/plan-selector-panel/plan-selector-panel.component';
import { SmartCalendarPanelComponent } from './shared/smart-calendar-panel/smart-calendar-panel.component';
import { TutorialButtonComponent } from './shared/tutorial-button/tutorial-button.component';
import { ZonaEnarmPanelComponent } from './shared/zona-enarm-panel/zona-enarm-panel.component';
import { AdminDailyComponent } from './pages/admin-daily/admin-daily.component';
import { AdminExamResultsComponent } from './pages/admin-exam-results/admin-exam-results.component';
import { ExamResultsTagStructureComponent } from './shared/exam-results-tag-structure/exam-results-tag-structure.component';
import { UserPromediosTableComponent } from './pages/user-promedios-table/user-promedios-table.component';
import { AdminExamsQuestionsAverageComponent } from './pages/admin-exams-questions-average/admin-exams-questions-average.component';
import { ZamnaCheckComponent } from './shared/zamna-check/zamna-check.component';
import { ZamnaRadioComponent } from './shared/zamna-radio/zamna-radio.component';
import { AdminPdfComponent } from './pages/admin-pdf/admin-pdf.component';
import { PdfDetailPageComponent } from './pages/pdf-detail-page/pdf-detail-page.component';
import { ZamnaContigoPanelComponent } from './shared/zamna-contigo-panel/zamna-contigo-panel.component';
import { PdfListPageComponent } from './pages/pdf-list-page/pdf-list-page.component';

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
    TerminosModalComponent,
    ContentListItemComponent,
    AdminPaymentModelsComponent,
    PaymentPageComponent,
    PaymentRequestDetailPageComponent,
    AdminNotificationsComponent,
    NotificationsModalComponent,
    PaymentModelPanelComponent,
    UserRolesPanelComponent,
    AdminCouponsComponent,
    AdminIpnComponent,
    QuestionPoolPanelComponent,
    ToolUploaderComponent,
    TagsPoolPanelComponent,
    TagsPoolModalComponent,
    AdminProgramaComponent,
    ProgramaEditComponent,
    ProgramaPanelComponent,
    ProgramaItemComponent,
    AdminStatCountersComponent,
    ContentItemComponent,
    QuestionAddComponent,
    ExamQuestionsByGroupWidgetComponent,
    AdminMigrationComponent,
    MediaListPageComponent,
    MediaListItemComponent,
    UserRolesComponent,
    NotesPageComponent,
    ExamFeedbackModalComponent,
    ResultsPageComponent,
    ContentErrorModalComponent,
    ContentErrorAddComponent,
    AdminContentErrorComponent,
    AdminExamRankingsComponent,
    ExamRankingAddComponent,
    AdPitPanelComponent,
    AdPremiumUpgradePanelComponent,
    AdminExamStatsPageComponent,
    AdminLandingFieldsComponent,
    AdminTagsPoolComponent,
    AdminUserStatsComponent,
    UserCouponsPanelComponent,
    AdminAdTextsComponent,
    UserMoodOverviewComponent,
    UserNotiAddComponent,
    AdminTutorialsComponent,
    ProgramaPanelAltComponent,
    ProgramaAltMateriaPageComponent,
    ProgramaAltBloquePageComponent,
    PlanSelectorPanelComponent,
    SmartCalendarPanelComponent,
    TutorialButtonComponent,
    ZonaEnarmPanelComponent,
    AdminDailyComponent,
    AdminExamResultsComponent,
    ExamResultsTagStructureComponent,
    UserPromediosTableComponent,
    AdminExamsQuestionsAverageComponent,
    ZamnaCheckComponent,
    ZamnaRadioComponent,
    AdminPdfComponent,
    PdfDetailPageComponent,
    ZamnaContigoPanelComponent,
    PdfListPageComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TagInputModule,
    NgxSmartModalModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    HttpClientModule,
    NgAisModule.forRoot(),
    NgbRatingModule,
    NgbTimepickerModule,
    NgbCarouselModule,
    NgbTypeaheadModule,
    NgbDatepickerModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    NgxGalleryModule,
    StoreModule.forRoot({
      exam: examReducer
    }/*, {
      metaReducers
    }*/),
    NgxChartsModule,
    MomentModule,
    ToastrModule.forRoot({
      autoDismiss: true,
      timeOut: 3000
    }),
    SelectDropDownModule,
    ScrollingModule,
    ScrollToModule.forRoot(),
    LoadingBarModule,
    Angular2CsvModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
