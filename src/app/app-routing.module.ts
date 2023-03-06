import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BootstrapSampleComponent } from './bootstrap-sample/bootstrap-sample.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IndexComponent } from '../app/post/index/index.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'post', redirectTo: '/post/index', pathMatch: 'full'},
  { path: 'sample', component: BootstrapSampleComponent },
  { path: 'home', component: FirstComponent },
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
