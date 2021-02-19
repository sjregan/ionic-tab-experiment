import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetService {

  reset = new Subject<null>();

  constructor() { }
}
