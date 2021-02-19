import {Component, OnInit} from '@angular/core';
import {ResetService} from '../reset.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  public tabs = [
    {id: 'tab1', icon: 'triangle', label: 'Tab 1'},
    {id: 'tab2', icon: 'ellipse', label: 'Tab 2'},
    {id: 'tab3', icon: 'square', label: 'Tab 3'},
  ];

  constructor(protected resetService: ResetService, protected router: Router) {}

  ngOnInit() {
    this.resetService.reset.subscribe(() => {
      this.router.navigate(['/tabs/tab1']);
    });
  }
}
