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

const routes: Routes = [

  // Master
  //{path: '**', redirectTo: '/'},

  // Core
  {path: '', component: LoginPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'gallery/:id', component: GalleryDetailPageComponent},
  {path: 'thread/category/:id', component: ThreadCategoryDetailPageComponent},
  {path: 'thread/:id', component: ThreadDetailPageComponent},
  {path: 'livestream/:id', component: LivestreamDetailPageComponent},
  {path: 'media/:id', component: MediaDetailPageComponent},
  {path: 'slide/list', component: SlidesListPageComponent},
  {path: 'slide/:id', component: SlideDetailPageComponent},
  {path: 'exam/:type/:id', component: ExamDetailPageComponent},
  {path: 'result/:id', component: ExamResultsPageComponent},

  // Content
  {path: 'content/:id', component: ContentPageComponent},
  {path: 'content/:type/:id', component: ContentDetailPageComponent},

  // Payment
  {path: 'pagar/:slug', component: PaymentPageComponent},
  {path: 'pago/status/:id', component: PaymentRequestDetailPageComponent},

  // Admin
  {path: 'admin', component: AdminPageComponent},
  {path: 'admin/users', component: AdminUsersPageComponent},
  {path: 'admin/content', component: AdminContentPageComponent},
  {path: 'admin/galleries', component: AdminGalleriesComponent},
  {path: 'admin/media', component: AdminMediaComponent},
  {path: 'admin/questions', component: AdminQuestionsComponent},
  {path: 'admin/exams', component: AdminExamsComponent},
  {path: 'admin/asesorias', component: AdminAsesoriasComponent},
  {path: 'admin/slides', component: AdminSlidesComponent},
  {path: 'admin/checklist', component: AdminTodoComponent},
  {path: 'admin/notes', component: AdminNotesComponent},
  {path: 'admin/comments', component: AdminCommentsComponent},
  {path: 'admin/suggestions', component: AdminSuggestionsComponent},
  {path: 'admin/events', component: AdminEventsComponent},
  {path: 'admin/forum', component: AdminForumComponent},
  {path: 'admin/livestreams', component: AdminLivestreamsComponent},
  {path: 'admin/tags', component: AdminTagsComponent},
  {path: 'admin/stats', component: AdminStatsComponent},
  {path: 'admin/payment-models', component: AdminPaymentModelsComponent},
  {path: 'admin/notifications', component: AdminNotificationsComponent},
  {path: 'admin/coupons', component: AdminCouponsComponent},
  {path: 'admin/ipn', component: AdminIpnComponent},
  {path: 'admin/programa', component: AdminProgramaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
