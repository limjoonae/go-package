import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SelectModule } from 'ng2-select';
//  import { ImageGalleryModule } from 'go-image-gallery';
// import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './header/header.component';
import { ContentComponent }  from './content/content.component';
import { SidebarChild }  from './sidebar-child/sidebar-child';
import { GoModule }  from 'go-module';

const appRoutes: Routes = [
{ path: '', component: ContentComponent},
]

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpModule,
    SelectModule,
    // ImageGalleryModule,
    // Ng2AutoCompleteModule,
    GoModule.forRoot(),
    RouterModule.forRoot(appRoutes, {useHash: true}), 
  ],
  declarations: [ 
    AppComponent,
    HeaderComponent,
    ContentComponent, 
    SidebarChild
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
