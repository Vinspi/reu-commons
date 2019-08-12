import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reuDate'
})
export class ReuDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
