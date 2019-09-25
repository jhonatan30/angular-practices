import { NgModule } from '@angular/core';
import { PromisesComponent } from './promises.component';
import { RouterModule, Routes } from '@angular/router';

import { SidebarComponent } from 'src/app/core/sidebar/sidebar.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: PromisesComponent,
            },
            {
                path: '',
                outlet: 'sidebar',
                component: SidebarComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PromisesRoutingModule { }
