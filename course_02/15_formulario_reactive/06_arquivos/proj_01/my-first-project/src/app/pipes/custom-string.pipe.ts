import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customString',
  standalone: true
})
export class CustomStringPipe implements PipeTransform {

  transform(value: string, arg?: string): string {
    if (arg === 'upper') {
      return value.toUpperCase();
    } else if (arg === 'lower') {
      return value.toLowerCase();
    }
    return value;
  }

  // transform(value: string, ...args: string[]): string {
  //   console.log(value, args);
  //   return value;
  // }

}
