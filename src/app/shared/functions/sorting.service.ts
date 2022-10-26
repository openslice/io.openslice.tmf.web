import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  constructor() { }

  ascStringSortingFunctionByNameProperty() {
    return (a,b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) { return -1; }
      if (nameA > nameB) { return 1; }
      return 0
    }
  }

  ascDateSortingFuncByDateProperty() {
    return (a,b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  }

  ascDateSortingFuncByTimeProperty() {
    return (a,b) => new Date(a.time).getTime() - new Date(b.time).getTime()
  }

}
