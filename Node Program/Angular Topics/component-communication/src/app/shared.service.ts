import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  names:Array<string>=[]

  constructor() { }
}
