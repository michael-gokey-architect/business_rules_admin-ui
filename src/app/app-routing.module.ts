import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './rules/home/home.component';
import { DetailsComponent } from './rules/details/details.component';
import { CreateComponent } from './rules/create/create.component';
import { UpdateComponent } from './rules/update/update.component';

const routes: Routes = [
  { path: 'rules', redirectTo: 'rules/home', pathMatch: 'full'},
  { path: 'rules/home', component: HomeComponent },
  { path: 'rules/details/:productId', component: DetailsComponent },
  { path: 'rules/create', component: CreateComponent },
  { path: 'rules/update/:productId', component: UpdateComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
