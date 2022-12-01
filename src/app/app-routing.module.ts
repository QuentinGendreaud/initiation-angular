import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { PronosticViewComponent } from './components/pronostic/pronostic-view/pronostic-view.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { 
    path: '', 
    children: [
      { path: 'pronostic', component: PronosticViewComponent},
    ],
    canActivate: [LoginGuard]
  },
  { path: 'login', component: LoginComponent},
  { path: 'error', component: ErrorComponent},
  // { path: '', redirectTo: 'pronostic', pathMatch:'full'}, ==> TODO COmprendre pourquoi ça plante
  { path: '**', redirectTo:'error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
