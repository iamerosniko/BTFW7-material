import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BtfwModule } from '../btfw/btfw.module';
import { RouterModule } from '@angular/router';

/* angular material */
import { MatTableModule,MatPaginatorModule,MatInputModule, MatSortModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ShowresultComponent } from './search/showresult/showresult.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { appRoutes } from './app.routing';
import { LocationComponent } from './maintenance/location/location.component';
import { DepartmentComponent } from './maintenance/department/department.component';
import { SkillsetmComponent } from './maintenance/skillsetm/skillsetm.component';
import { ExportpdfComponent } from './search/export/exportpdf/exportpdf.component';
import { ExportexcelComponent } from './search/export/exportexcel/exportexcel.component';
import { AdminComponent } from './admin/admin.component';
import { AdminaccessComponent } from './adminaccess/adminaccess.component';
import { MaterialTableComponent } from './material-table/material-table.component';

import { UserService } from './com_services/user.service';
import { UserApi } from '../btfw/users/user-api';
import { AuthGuard } from './com_services/auth-guard.service';
import { AdmGuard } from './com_services/adm-guard.service';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowresultComponent,
    SkillsetComponent,
    LocationComponent,
    DepartmentComponent,
    SkillsetmComponent,
    ExportpdfComponent,
    ExportexcelComponent,
    AdminComponent,
    AdminaccessComponent,
    MaterialTableComponent,
    SampleComponent,
  ],
  imports: [
    BrowserModule,
    BtfwModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    { provide: UserApi, useExisting: UserService },
    AuthGuard,
    AdmGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
