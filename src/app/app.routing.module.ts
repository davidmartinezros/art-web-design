import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { Page4Component } from './pages/page4/page4.component';
import { DefaultComponent } from './pages/default/default.component';

const appRoutes: Routes = [
  {
    path: '#',
    redirectTo: ''
  },
  {
    path: '',
    component: DefaultComponent
  },
  {
    path: 'page1',
    component: Page1Component
  },
  {
    path: 'page2',
    component: Page2Component
  },
  {
    path: 'page3',
    component: Page3Component
  },
  {
    path: 'page4',
    component: Page4Component
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [ RouterModule ]
})
export class RoutingModule {

  
  
}
