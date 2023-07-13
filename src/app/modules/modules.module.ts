import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group/group.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
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
