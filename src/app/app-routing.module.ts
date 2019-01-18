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

const routes: Routes = [

  // Master
  //{path: '**', redirectTo: '/'},

  // Core
  {path: '', component: LoginPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'profile', component: ProfilePageComponent},

  // Admin
  {path: 'admin', component: AdminPageComponent},
  {path: 'admin/users', component: AdminUsersPageComponent},
  {path: 'admin/content', component: AdminContentPageComponent},
  {path: 'admin/galleries', component: AdminGalleriesComponent},
  {path: 'admin/media', component: AdminMediaComponent},
  {path: 'admin/questions', component: AdminQuestionsComponent},
  {path: 'admin/exams', component: AdminExamsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
