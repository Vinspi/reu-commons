import { NgModule } from '@angular/core';
import { ReuCommonsPipesComponent } from './reu-commons-pipes.component';
import { ReuDatePipe } from './reu-date.pipe';

@NgModule({
  declarations: [ReuCommonsPipesComponent, ReuDatePipe],
  imports: [
  ],
  exports: [ReuCommonsPipesComponent, ReuDatePipe]
})
export class ReuCommonsPipesModule { }
