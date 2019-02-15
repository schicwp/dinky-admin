import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkflowListComponent } from './routes/workflow-list/workflow-list.component';
import {RouterModule, Routes} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthTokenInterceptor} from "./auth/auth-token.interceptor";
import { WorkflowDetailsComponent } from './routes/workflow-details/workflow-details.component';
import { ContentTypeListComponent } from './routes/content-type-list/content-type-list.component';
import { ContentTypeDetailsComponent } from './routes/content-type-details/content-type-details.component';
import { ContentListComponent } from './routes/content-list/content-list.component';
import { ContentDetailsComponent } from './routes/content-details/content-details.component';
import {FormsModule} from "@angular/forms";
import { ObjectRefComponent } from './components/fields/object-ref/object-ref.component';
import { CollectionComponent } from './components/fields/collection/collection.component';
import { ContentFieldComponent } from './components/content-field/content-field.component';
import { StringComponent } from './components/fields/string/string.component';
import {NgSelectModule} from "@ng-select/ng-select";
import {
  NgbDatepicker, NgbDatepickerModule, NgbModalModule, NgbTabsetModule,
  NgbTimepickerModule
} from "@ng-bootstrap/ng-bootstrap";
import { DateFieldComponent } from './components/fields/date-field/date-field.component';
import { SearchComponent } from './routes/search/search.component';
import { PagerComponent } from './components/pager/pager.component';
import { BooleanIndicatorComponent } from './components/boolean-indicator/boolean-indicator.component';
import { ConfigViewComponent } from './components/config-view/config-view.component';
import { SubmissionErrorDialogComponent } from './components/submission-error-dialog/submission-error-dialog.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SortControlComponent } from './components/sort-control/sort-control.component';
import { MaintenanceComponent } from './routes/maintenance/maintenance.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'search/:index/:query', component: SearchComponent },
  { path: 'workflows', component: WorkflowListComponent },
  { path: 'workflows/:name', component: WorkflowDetailsComponent },
  { path: 'content-type', component: ContentTypeListComponent },
  { path: 'content-type/:name', component: ContentTypeDetailsComponent },
  { path: 'content/:type', component: ContentListComponent },
  { path: 'content/:type/:id', component: ContentDetailsComponent },
  { path: 'create/:type', component: ContentDetailsComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: '**', redirectTo: "/workflows" }
];


@NgModule({
  declarations: [
    AppComponent,
    WorkflowListComponent,
    WorkflowDetailsComponent,
    ContentTypeListComponent,
    ContentTypeDetailsComponent,
    ContentListComponent,
    ContentDetailsComponent,
    ObjectRefComponent,
    CollectionComponent,
    ContentFieldComponent,
    StringComponent,
    DateFieldComponent,
    SearchComponent,
    PagerComponent,
    BooleanIndicatorComponent,
    ConfigViewComponent,
    SubmissionErrorDialogComponent,
    SearchBoxComponent,
    SortControlComponent,
    MaintenanceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{useHash: true}),
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    NgbTabsetModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbModalModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents:[SubmissionErrorDialogComponent]
})
export class AppModule { }
