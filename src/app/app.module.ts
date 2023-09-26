import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbInputModule, NbCardModule, NbMenuModule, NbSidebarService, NbButtonModule, NbDialogService, NbDialogModule, NbToastrService, NbToastrModule, NbDatepickerModule, NbTimepickerModule, NbIconModule, NbTreeGridModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TestingComponent } from './testing/testing.component';
import { LayoutModule } from './ui/layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/shared/services';
import { SharedModule } from './shared/shared';
import { environment } from 'src/environments/environment';
import { NgxExtendedPdfViewerModule, NgxExtendedPdfViewerService } from 'ngx-extended-pdf-viewer';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbEvaIconsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbMenuModule.forRoot(),
    NbToastrModule.forRoot(),
    NbCardModule,
    Ng2SmartTableModule,
    NbDialogModule.forRoot(),
    NbEvaIconsModule,
    SharedModule.forRoot({ environment: environment.baseUrl, production:environment.production}),
    NbDatepickerModule.forRoot(),
    NbTimepickerModule.forRoot(),
    NgxExtendedPdfViewerModule,
    NbIconModule,
    NbTreeGridModule,
    AuthRoutingModule,
    NgxPermissionsModule.forRoot()
  ],
  providers: [NbSidebarService,NbDialogService,ApiService,NbToastrService,NgxExtendedPdfViewerService,NgxPermissionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
