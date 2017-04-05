import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapClassService, CommonService, CheckDataService } from './component/go-service/src/app/go-service/component/index';
import { CustomDisabledDirective, CustomReadonlyDirective, CustomMaxlengthDirective, CustomCheckDirective } from './component/go-directive/src/app/go-directive/component/index';

import { BadgeComponent } from './component/go-badge/src/app/go-badge/component/badge.component';
import { ButtonComponent } from './component/go-button/src/app/go-button/component/button.component';

import { CheckboxComponent } from './component/go-checkbox/src/app/go-checkbox/component/checkbox.component';

import { ImageModal }  from './component/go-image-gallery/node_modules/angular2-image-popup/directives/angular2-image-popup/image-modal-popup';
import { ImageGalleryComponent } from './component/go-image-gallery/src/app/go-image-gallery/component/image-gallery.component';

import { LabelComponent } from './component/go-label/src/app/go-label/component/label.component';
import { ProgressbarComponent } from './component/go-progressbar/src/app/go-progressbar/component/progressbar.component';
import { PulldownMenuComponent } from './component/go-pulldown-menu/src/app/go-pulldown-menu/component/pulldown-menu.component';
import { RadioButtonComponent } from './component/go-radiobutton/src/app/go-radiobutton/component/radiobutton.component';

import { HighlightPipe, OffClickDirective, SelectComponent } from 'ng2-select';
import { SidebarModule } from 'ng-sidebar';
import { SidebarComponent } from './component/go-sidebar/src/app/go-sidebar/component/sidebar.component';

import { TableComponent } from './component/go-table/src/app/go-table/component/table.component';
import { PaginationModule } from 'ng2-bootstrap';
import { Ng2TableModule } from 'ng2-table';

import { TextareaComponent } from './component/go-textarea/src/app/go-textarea/component/textarea.component';

import { TooltipModule } from 'ng2-bootstrap';
import { TransformService } from './component/go-textbox/src/app/go-textbox/component/transform.service';
import { ValidationService } from './component/go-textbox/src/app/go-textbox/component/validation.service';
import { TextboxComponent } from './component/go-textbox/src/app/go-textbox/component/textbox.component';

import { TextEditorComponent } from './component/go-texteditor/src/app/go-texteditor/component/texteditor.component';
import { UploadComponent } from './component/go-upload/src/app/go-upload/component/upload.component';

import { DateTimePickerComponent } from './component/go-datetimepicker/src/app/datetimepicker/component/datetimepicker.component';
import { CALENDAR_VALUE_ACCESSOR, CALENDAR_VALIDATOR, LocaleSettings, Calendar, ButtonModule } from 'primeng/primeng';

const appRoutes: Routes = [
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    TooltipModule.forRoot(), 
    PaginationModule.forRoot(),
    Ng2TableModule,
    SidebarModule,
    ButtonModule,
  ],
  declarations: [
    BadgeComponent,
    ButtonComponent,
    CheckboxComponent,
    CustomDisabledDirective, CustomReadonlyDirective, CustomMaxlengthDirective, CustomCheckDirective,
    ImageGalleryComponent, ImageModal,
    LabelComponent,
    ProgressbarComponent,
    PulldownMenuComponent,
    RadioButtonComponent,
    HighlightPipe, OffClickDirective, SelectComponent,
    SidebarComponent,
    TableComponent,
    TextareaComponent,
    TextboxComponent, 
    TextEditorComponent,
    UploadComponent,
    DateTimePickerComponent,
    Calendar,
  ],
  exports: [
    BadgeComponent,
    ButtonComponent,
    CheckboxComponent,
    CustomDisabledDirective, CustomReadonlyDirective, CustomMaxlengthDirective, CustomCheckDirective,
    ImageGalleryComponent, ImageModal,
    LabelComponent,
    ProgressbarComponent,
    PulldownMenuComponent,
    RadioButtonComponent,
    HighlightPipe, OffClickDirective, SelectComponent,
    SidebarComponent,
    TableComponent,
    TextareaComponent,
    TextboxComponent, 
    TextEditorComponent,
    UploadComponent,
    DateTimePickerComponent,
    Calendar,
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