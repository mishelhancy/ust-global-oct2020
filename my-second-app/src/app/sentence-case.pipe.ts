import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentenceCase'
})
export class SentenceCasePipe implements PipeTransform {

  transform(value: string, ...args: any[]): unknown {
    return value[0].toUpperCase() + value.slice(1).toLowerCase()
    // return null;
  }

}
