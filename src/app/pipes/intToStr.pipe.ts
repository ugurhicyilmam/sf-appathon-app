import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'intToStr'})
export class IntToStrPipe implements PipeTransform {
  transform(value, args: string[]): string {
    if (!value) {
      return '';
    }
    return value + '';
  }
}
