import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapClassService, CommonService, CheckDataService } from './component/go-service/component/index';
import { CustomDisabledDirective, CustomReadonlyDirective, CustomMaxlengthDirective, CustomCheckDirective } from './component/go-directive/component/index';

import { BadgeComponent } from './component/go-badge/component/badge.component';
import { ButtonComponent } from './component/go-button/component/button.component';

import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './component/go-chart/component/chart.component';

import { CheckboxComponent } from './component/go-checkbox/component/checkbox.component';
import { CalendarModule } from 'primeng/primeng';
import { DateTimePickerComponent } from './component/go-datetimepicker/component/datetimepicker.component';

import { ImageModal }  from './component/go-image-gallery/node_modules/angular2-image-popup/directives/angular2-image-popup/image-modal-popup';
import { ImageGalleryComponent } from './component/go-image-gallery/component/image-gallery.component';

import { LabelComponent } from './component/go-label/component/label.component';
import { ProgressbarComponent } from './component/go-progressbar/component/progressbar.component';
import { PulldownMenuComponent } from './component/go-pulldown-menu/component/pulldown-menu.component';
import { RadioButtonComponent } from './component/go-radiobutton/component/radiobutton.component';

import { SidebarModule } from 'ng-sidebar';
import { SidebarComponent } from './component/go-sidebar/component/sidebar.component';

import { TableComponent } from './component/go-table/component/table.component';
import { PaginationModule } from 'ng2-bootstrap';
import { Ng2TableModule } from 'ng2-table';

import { TextareaComponent } from './component/go-textarea/component/textarea.component';

import { TooltipModule } from 'ng2-bootstrap';
import { TransformService } from './component/go-textbox/component/transform.service';
import { ValidationService } from './component/go-textbox/component/validation.service';
import { TextboxComponent } from './component/go-textbox/component/textbox.component';

import { TextEditorComponent } from './component/go-texteditor/component/texteditor.component';
import { UploadComponent } from './component/go-upload/component/upload.component';

const appRoutes: Routes = [
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    TooltipModule.forRoot(), 
    ChartsModule,
    CalendarModule,
    PaginationModule.forRoot(),
    Ng2TableModule,
    SidebarModule,
  ],
  declarations: [
    BadgeComponent,
    ButtonComponent,
    ChartComponent,
    CheckboxComponent,
    CustomDisabledDirective, CustomReadonlyDirective, CustomMaxlengthDirective, CustomCheckDirective,
    DateTimePickerComponent,
    ImageGalleryComponent, ImageModal,
    LabelComponent,
    ProgressbarComponent,
    PulldownMenuComponent,
    RadioButtonComponent,
    SidebarComponent,
    TableComponent,
    TextareaComponent,
    TextboxComponent, 
    TextEditorComponent,
    UploadComponent,
  ],
  exports: [
    BadgeComponent,
    ButtonComponent,
    ChartComponent,
    CheckboxComponent,
    CustomDisabledDirective, CustomReadonlyDirective, CustomMaxlengthDirective, CustomCheckDirective,
    DateTimePickerComponent,
    ImageGalleryComponent, ImageModal,
    LabelComponent,
    ProgressbarComponent,
    PulldownMenuComponent,
    RadioButtonComponent,
    SidebarComponent,
    TableComponent,
    TextareaComponent,
    TextboxComponent, 
    TextEditorComponent,
    UploadComponent,
  ]
})
export class GoModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GoModule,
      providers: [ 
        BootstrapClassService, CommonService, CheckDataService,
        TransformService, ValidationService, 
      ]
    }
  }
}