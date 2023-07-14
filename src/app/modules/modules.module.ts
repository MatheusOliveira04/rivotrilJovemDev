import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './componets/group/group.component';
import { FormComponent } from './componets/form/form.component';
import { TableComponent } from './componets/table/table.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GroupComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    GroupComponent,
  ]
})
export class ModulesModule { }
