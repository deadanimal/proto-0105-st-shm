import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { LeafletModule } from "@asymmetrik/ngx-leaflet";

import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { HomeComponent } from './home/home.component';
import { StatisticComponent } from './statistic/statistic.component';
import { ContactComponent } from './contact/contact.component';
import { PublicationComponent } from './publication/publication.component';
import { SubmissionComponent } from './submission/submission.component';
import { HistoryComponent } from './history/history.component';
import { RoleComponent } from './role/role.component';

@NgModule({
  declarations: [
    
    ManagementAuditComponent,
    ManagementUserComponent,
    ReportComponent,
    HomeComponent,
    StatisticComponent,
    ContactComponent,
    PublicationComponent,
    SubmissionComponent,
    HistoryComponent,
    RoleComponent

  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    LeafletModule,
    CarouselModule.forRoot(),
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminModule { }
