import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheSearchParametersService {

  constructor() { }

  serviceOrderListDateFrom = new Date(new Date().setMonth(new Date().getMonth()-3))
  serviceOrderListDateTo = new Date()
}
