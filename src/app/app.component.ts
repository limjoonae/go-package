import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container clearfix">
    <web-gallery-header></web-gallery-header>
    <router-outlet></router-outlet>
</div>
    `,
})
export class AppComponent  { name = 'Angular'; }
