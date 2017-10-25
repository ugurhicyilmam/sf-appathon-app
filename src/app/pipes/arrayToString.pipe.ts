import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'arrayToString'})
export class ArrayToStringPipe implements PipeTransform {
  transform(value: any[], args: string[]): string {
    if (!value) {return '';}
    return JSON.stringify(value);
  }
}