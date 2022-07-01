import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'jsonParse'})
  export class jsonParsePipe implements PipeTransform {
    transform(val) {
      try 
      {
        let parsed = JSON.parse(val)
        return parsed
      } 
      catch (e) {
        return val
      }
      // return JSON.parse(val)
    }
  }