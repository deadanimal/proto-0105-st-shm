import { Routes } from '@angular/router';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { ProviderComponent } from './provider/provider.component'

export const UserRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'provider',
                component: ProviderComponent
            }
        ]
    }
]