import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private messageSource = new BehaviorSubject(null);
  currentMessage = this.messageSource.asObservable();

  private wellsandSource = new BehaviorSubject(null);
  curWellsandMessage = this.wellsandSource.asObservable();

  constructor() { }
  changeMessage(message: any) {
    this.messageSource.next(message);
  }

  changeWellsandMessage(message: any) {
    this.wellsandSource.next(message);
  }
}
