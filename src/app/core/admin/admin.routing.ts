import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
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

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'management',
                children: [
                    {
                        path: 'audit-trails',
                        component: ManagementAuditComponent
                    },
                    {
                        path: 'user',
                        component: ManagementUserComponent
                    },
                    {
                        path: 'history',
                        component: HistoryComponent
                    },
                    {
                        path: 'role',
                        component: RoleComponent
                    }
                ]
            },
            {
                path: 'statistic',
                component: StatisticComponent
            },
            {
                path: 'contact',
                component: ContactComponent
            },
            {
                path: 'publication',
                component: PublicationComponent
            },
            {
                path: 'report',
                component: ReportComponent
            },
            {
                path: 'submission',
                component: SubmissionComponent
            }

        ]
    }
]