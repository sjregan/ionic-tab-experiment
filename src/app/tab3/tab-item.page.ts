import { Component } from '@angular/core';
import {ResetService} from '../reset.service';

@Component({
  selector: 'app-tab-item',
  templateUrl: 'tab-item.page.html',
  styleUrls: ['tab-item.page.scss']
})
export class TabItemPage {

  constructor(protected resetService: ResetService) {}

  reset() {
    this.resetService.reset.next();
  }

}
