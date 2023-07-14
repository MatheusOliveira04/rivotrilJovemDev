import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './modules/componets/group/group.component';
import { FormComponent } from './modules/componets/form/form.component';

const routes: Routes = [
  {path: 'group', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
