import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'rxjs',
        // Dynamic import
        loadChildren: () => import('./components/rxjs/rxjs.module').then(m => m.RxjsModule)
    },
    {
        path: 'promises',
        // Dynamic import
        loadChildren: () => import('./components/promises/promises.module').then(m => m.PromisesModule)
    },
    {
        path: 'javascript',
        // Dynamic import
        loadChildren: () => import('./components/js/js.module').then(m => m.JsModule)
    },
    {
        path: 'paradigms',
        // Dynamic import
        loadChildren: () => import('./components/paradigms/paradigms.module').then(m => m.ParadigmsModule)

    },
    {
        path: 'git',
        // Dynamic import
        loadChildren: () => import('./components/git/git.module').then(m => m.GitModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AppRouting { }
