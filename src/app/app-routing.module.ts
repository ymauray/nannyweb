import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConfidentialiteComponent } from './confidentialite/confidentialite.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'confidentialite', component: ConfidentialiteComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
