import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby',
  standalone: true
})
export class OrderbyPipe implements PipeTransform {

  transform(value: any[], field?: string, reverse: boolean = false): any[] {
    if (!Array.isArray(value)) {
      return value;
    }

    value.sort((a: any, b: any) => {
      let comparison = 0;

      if (field) {
        if (a[field] < b[field]) {
          comparison = -1;
        } else if (a[field] > b[field]) {
          comparison = 1;
        }
      } else {
        if (a < b) {
          comparison = -1;
        } else if (a > b) {
          comparison = 1;
        }
      }

      return reverse ? comparison * -1 : comparison;
    });

    return value;
  }

}
