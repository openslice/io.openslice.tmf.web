import { Injectable } from '@angular/core';
import { IRuleProgram } from '../models/IRuleProgram';

@Injectable({
  providedIn: 'root'
})
export class RuleProgramService {

  programList: IRuleProgram[];

  constructor() {
    this.programList = [];
  }

  getAll(): IRuleProgram[] {
    return this.programList;
  }

  getOne(name: string): IRuleProgram | any {
      return this.programList.find((program ) => {
        return program.name === name;
      });
  
  }

  upsertOne(program: IRuleProgram): void {
    const tmp: IRuleProgram = this.getOne(program.name);
    if (tmp) {
      tmp.xmlData = program.xmlData;
    } else {
      this.programList.push(program);
    }
  }
}
