import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { UsersViewComponent } from './users-view/users-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'user-view', pathMatch: 'full' },
  { path: 'users-view', component: UsersViewComponent },
  { path: 'users', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
