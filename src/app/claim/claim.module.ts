import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { RecordComponent } from './record/record.component';



@NgModule({
  declarations: [
    SearchComponent,
    RecordComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[SearchComponent,RecordComponent]
})
export class ClaimModule { }
