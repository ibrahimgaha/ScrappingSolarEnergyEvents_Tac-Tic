import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { AcceuilComponent } from 'src/app/acceuil/acceuil.component';
import { SurveillerUrlComponent } from './surveiller-url/surveiller-url.component';
import { DisplayDataComponent } from './display-table-data/display-table-data.component';
import { EnsembleUrlComponent } from './ensemble-url/ensemble-url.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"acceuil",component:AcceuilComponent},
  {path:"surveiller_URL",component:SurveillerUrlComponent},
  {path:"Display_Data",component:DisplayDataComponent},
  {path:"Ensembles_URL",component:EnsembleUrlComponent},
  {path:"about_us",component:AboutComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
