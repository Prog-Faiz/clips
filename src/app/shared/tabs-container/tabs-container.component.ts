import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css'],
})
export class TabsContainerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> =
    new QueryList();

  ngAfterContentInit() {
    const activeTabs = this.tabs?.filter((tab) => {
      return tab.active;
    });

    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });

    tab.active = true;

    return false;
  }

  getActiveCssClasses(tab: TabComponent) {
    return {
      'hover:text-indigo-400': !tab.active,
      'hover:text-white bg-indigo-400': tab.active,
    };
  }
}
