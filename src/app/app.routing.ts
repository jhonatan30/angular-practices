import { JsModule } from './components/js/js.module';
import { NgModule } from '@angular/core';
import { ParadigmsModule } from './components/paradigms/paradigms.module';
import { PromisesComponent } from './components/promises/promises.component';
import { RouterModule, Routes } from '@angular/router';
import { RxjsModule } from './components/rxjs/rxjs.module';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'rxjs',
        loadChildren: () => RxjsModule
    },
    {
        path: 'promises',
        component: PromisesComponent
    },
    {
        path: 'javascript',
        loadChildren: () => JsModule
    },
    {
        path: 'paradigms',
        loadChildren: () => ParadigmsModule
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AppRouting { }
