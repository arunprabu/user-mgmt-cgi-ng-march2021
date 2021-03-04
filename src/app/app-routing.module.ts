import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './users/components/add-user/add-user.component';
import { UserDetailsComponent } from './users/components/user-details/user-details.component';
import { UsersComponent } from './users/components/users.component';

// configuring the routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concepts', component: ConceptsComponent },
  {
    path: 'users', children: [
      { path: '', component: UsersComponent },
      { path: 'add', component: AddUserComponent },
      { path: ':id', component: UserDetailsComponent },  // URL Param is id
    ]
  },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
