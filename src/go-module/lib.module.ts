import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2AutoCompleteComponent, Ng2AutoCompleteDirective, Ng2AutoComplete } from './component/go-auto-complete/node_modules/ng2-auto-complete/src/index';
import { HighlightPipe, OffClickDirective, SelectComponent } from './component/go-selectbox/node_modules/ng2-select/src/ng2-select';
import { NgTranscludeDirective, TabDirective, TabsetComponent, TabHeadingDirective, TabsetConfig } from './component/go-ng2-bootstrap/node_modules/ng2-bootstrap/src/tabs/index';
import { TooltipContainerComponent, TooltipDirective, TooltipConfig } from './component/go-ng2-bootstrap/node_modules/ng2-bootstrap/src/tooltip/index';
import { ComponentLoaderFactory } from './component/go-ng2-bootstrap/node_modules/ng2-bootstrap/src/component-loader/index';
import { PositioningService } from './component/go-ng2-bootstrap/node_modules/ng2-bootstrap/src/positioning/index';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ 
    Ng2AutoCompleteComponent, Ng2AutoCompleteDirective,
    HighlightPipe, OffClickDirective, SelectComponent,
    NgTranscludeDirective, TabDirective, TabsetComponent, TabHeadingDirective,
    TooltipContainerComponent, TooltipDirective,
    ],
  exports: [ 
    Ng2AutoCompleteComponent, Ng2AutoCompleteDirective,
    HighlightPipe, OffClickDirective, SelectComponent,
    NgTranscludeDirective, TabDirective, TabsetComponent, TabHeadingDirective,
    TooltipDirective,
    ],
  entryComponents: [ Ng2AutoCompleteComponent, TooltipContainerComponent ],
})
export class LibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LibModule,
      providers: [ 
        Ng2AutoComplete, 
        TabsetConfig, 
        TooltipConfig, ComponentLoaderFactory, PositioningService
      ]
    }
  }
}