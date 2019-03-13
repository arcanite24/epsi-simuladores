import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { AdminUsersPageComponent } from './pages/admin-users-page/admin-users-page.component';
import { AdminContentPageComponent } from './pages/admin-content-page/admin-content-page.component';
import { AdminGalleriesComponent } from './pages/admin-galleries/admin-galleries.component';
import { AdminMediaComponent } from './pages/admin-media/admin-media.component';
import { AdminQuestionsComponent } from './pages/admin-questions/admin-questions.component';
import { AdminExamsComponent } from './pages/admin-exams/admin-exams.component';
import { AdminAsesoriasComponent } from './pages/admin-asesorias/admin-asesorias.component';
import { AdminSlidesComponent } from './pages/admin-slides/admin-slides.component';
import { AdminTodoComponent } from './pages/admin-todo/admin-todo.component';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { ContentDetailPageComponent } from './pages/content-detail-page/content-detail-page.component';
import { AdminNotesComponent } from './pages/admin-notes/admin-notes.component';
import { AdminCommentsComponent } from './pages/admin-comments/admin-comments.component';
import { AdminSuggestionsComponent } from './pages/admin-suggestions/admin-suggestions.component';
import { AdminEventsComponent } from './pages/admin-events/admin-events.component';
import { GalleryDetailPageComponent } from './pages/gallery-detail-page/gallery-detail-page.component';
import { AdminForumComponent } from './pages/admin-forum/admin-forum.component';
import { ThreadCategoryDetailPageComponent } from './pages/thread-category-detail-page/thread-category-detail-page.component';
import { ThreadDetailPageComponent } from './pages/thread-detail-page/thread-detail-page.component';
import { AdminLivestreamsComponent } from './pages/admin-livestreams/admin-livestreams.component';
import { LivestreamDetailPageComponent } from './pages/livestream-detail-page/livestream-detail-page.component';
import { MediaDetailPageComponent } from './pages/media-detail-page/media-detail-page.component';
import { SlidesListPageComponent } from './pages/slides-list-page/slides-list-page.component';
import { SlideDetailPageComponent } from './pages/slide-detail-page/slide-detail-page.component';
import { ExamDetailPageComponent } from './pages/exam-detail-page/exam-detail-page.component';
import { ExamResultsPageComponent } from './pages/exam-results-page/exam-results-page.component';
import { AdminTagsComponent } from './pages/admin-tags/admin-tags.component';
import { AdminStatsComponent } from './pages/admin-stats/admin-stats.component';
import { AdminPaymentModelsComponent } from './pages/admin-payment-models/admin-payment-models.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { PaymentRequestDetailPageComponent } from './pages/payment-request-detail-page/payment-request-detail-page.component';
import { AdminNotificationsComponent } from './pages/admin-notifications/admin-notifications.component';
import { AdminCouponsComponent } from './page/admin-coupons/admin-coupons.component';
import { AdminIpnComponent } from './pages/admin-ipn/admin-ipn.component';
import { AdminProgramaComponent } from './pages/admin-programa/admin-programa.component';
import { AdminStatCountersComponent } from './pages/admin-stat-counters/admin-stat-counters.component';
import { AdminMigrationComponent } from './pages/admin-migration/admin-migration.component';
import { MediaListPageComponent } from './pages/media-list-page/media-list-page.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
import { NotesPageComponent } from './pages/notes-page/notes-page.component';
import { ResultsPageComponent } from './pages/results-page/results-page.component';
import { AdminContentErrorComponent } from './pages/admin-content-error/admin-content-error.component';
import { AdminExamRankingsComponent } from './pages/admin-exam-rankings/admin-exam-rankings.component';
import { ToolUploaderComponent } from './shared/tool-uploader/tool-uploader.component';
import { AdminExamStatsPageComponent } from './pages/admin-exam-stats-page/admin-exam-stats-page.component';
import { AdminLandingFieldsComponent } from './pages/admin-landing-fields/admin-landing-fields.component';
import { AdminTagsPoolComponent } from './pages/admin-tags-pool/admin-tags-pool.component';
import { AdminUserStatsComponent } from './pages/admin-user-stats/admin-user-stats.component';

const routes: Routes = [

  // Master
  //{path: '**', redirectTo: '/'},

  // Core
  {path: '', component: LoginPageComponent},
  {path: 'home', component: HomePageComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard]},
  {path: 'notes', component: NotesPageComponent, canActivate: [AuthGuard]},
  {path: 'gallery/:id', component: GalleryDetailPageComponent, canActivate: [AuthGuard]},
  {path: 'thread/category/:id', component: ThreadCategoryDetailPageComponent, canActivate: [AuthGuard]},
  {path: 'thread/:id', component: ThreadDetailPageComponent, canActivate: [AuthGuard]},
  {path: 'livestream/:id', component: LivestreamDetailPageComponent, canActivate: [AuthGuard]},
  {path: 'media/list', component: MediaListPageComponent, canActivate: [AuthGuard]},
  {path: 'media/:id', component: MediaDetailPageComponent, canActivate: [AuthGuard]},
  {path: 'slide/list', component: SlidesListPageComponent, canActivate: [AuthGuard]},
  {path: 'slide/:id', component: SlideDetailPageComponent, canActivate: [AuthGuard]},
  {path: 'exam/:type/:id', component: ExamDetailPageComponent},
  /* {path: 'exam/:type/:id', component: ExamDetailPageComponent}, */
  {path: 'results', component: ResultsPageComponent},
  {path: 'result/:id', component: ExamResultsPageComponent},

  // Debug
  {path: 'subir-archivos', component: ToolUploaderComponent},

  // Content
  {path: 'content/:id', component: ContentPageComponent, canActivate: [AuthGuard]},
  {path: 'content/:type/:id', component: ContentDetailPageComponent, canActivate: [AuthGuard]},

  // Payment
  {path: 'pagar/:slug', component: PaymentPageComponent},
  {path: 'pago/status/:id', component: PaymentRequestDetailPageComponent},

  // Admin
  {canActivate: [AuthGuard, AdminGuard], path: 'admin', component: AdminPageComponent},
  {canActivate: [AuthGuard, AdminGuard], path: 'admin/users', component: AdminUsersPageComponent},
  {canActivate: [AuthGuard, AdminGuard], path: 'admin/user/stats/:id', component: AdminUserStatsComponent},
  {canActivate: [AuthGuard, AdminGuard], path: 'admin/content', component: AdminContentPageComponent},
  {canActivate: [AuthGuard, AdminGuard], path: 'admin/galleries', component: AdminGalleriesComponent},
  {canActivate: [AuthGuard, AdminGuard], path: 'admin/media', component: AdminMediaComponent},
  {canActivate: [AuthGuard, AdminGuard], path: 'admin/questions', component: AdminQuestionsComponent},
  {canActivate: [AuthGuard, AdminGuard], path: 'admin/exams', component: AdminExamsComponent},
  {canActivate: [AuthGuard], path: 'admin/exam/stats/:id', component: AdminExamStatsPageComponent},
  {canActivate: [AuthGuard, AdminGuard], path: 'admin/asesorias', component: AdminAsesoriasComponent},
  {canActivate: [AuthGuard, AdminGuard], path: 'admin/slides', component: AdminSlidesComponent},
  {canActivate: [AuthGuard, AdminGuard], path: 'admin/checklist', component: AdminTodoComponent},
  {canActivate: [AuthGuard, AdminGuard], path: 'admin/notes', component: AdminNotesComponent},
  {canActivate: [AuthGuard, AdminGuard], path: 'admin/comments', component: AdminCommentsComponent},
  {canActivate: [AuthGuard, AdminGuard], path: 'admin/suggestions', component: AdminSuggestionsComponent},
  {canActivate: [AuthGuard, AdminGuard], path: 'admin/events', component: AdminEventsComponent},
  {canActivate: [AuthGuard, AdminGuard], path: 'admin/forum', component: AdminForumComponent},
  {canActivate: [AuthGuard, AdminGuard], path: 'admin/livestreams', component: AdminLivestreamsComponent},
  {canActivate: [AuthGuard, AdminGuard], path: 'admin/tags', component: AdminTagsComponent},
  {canActivate: [AuthGuard], path: 'admin/stats', component: AdminStatsComponent},
  {canActivate: [AuthGuard, AdminGuard], path: 'admin/payment-models', component: AdminPaymentModelsComponent},
  {canActivate: [AuthGuard, AdminGuard], path: 'admin/tags-pool', component: AdminTagsPoolComponent},
  {canActivate: [AuthGuard, AdminGuard], path: 'admin/notifications', component: AdminNotificationsComponent},
  {canActivate: [AuthGuard, AdminGuard], path: 'admin/coupons', component: AdminCouponsComponent},
  {canActivate: [AuthGuard, AdminGuard], path: 'admin/ipn', component: AdminIpnComponent},
  {canActivate: [AuthGuard, AdminGuard], path: 'admin/programa', component: AdminProgramaComponent},
  {canActivate: [AuthGuard, AdminGuard], path: 'admin/stats/counters', component: AdminStatCountersComponent},
  {canActivate: [AuthGuard, AdminGuard], path: 'admin/migration', component: AdminMigrationComponent},
  {canActivate: [AuthGuard, AdminGuard], path: 'admin/content-error', component: AdminContentErrorComponent},
  {canActivate: [AuthGuard, AdminGuard], path: 'admin/exam-rankings', component: AdminExamRankingsComponent},
  {canActivate: [AuthGuard, AdminGuard], path: 'admin/landing-fields', component: AdminLandingFieldsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
