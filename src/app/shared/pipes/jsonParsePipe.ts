import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'jsonParse'})
  export class jsonParsePipe implements PipeTransform {
    transform(val) {
      return JSON.parse(val)
    }
  }