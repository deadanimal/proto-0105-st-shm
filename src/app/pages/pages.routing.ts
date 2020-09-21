import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const PagesRoutes: Routes = [
    {
        path: 'home',
        children: [
            {
                path: 'home',
                component: HomeComponent
            }
        ]
    }
]