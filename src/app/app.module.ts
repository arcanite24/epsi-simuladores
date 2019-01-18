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
  ],
  imports: [
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
