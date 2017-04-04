import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2AutoCompleteComponent, Ng2AutoCompleteDirective, Ng2AutoComplete } from 'ng2-auto-complete';
import { Accordion, AccordionTab } from 'primeng/primeng';

@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule,
  ],
  declarations: [ 
    Ng2AutoCompleteComponent, Ng2AutoCompleteDirective,
    Accordion, AccordionTab,
    ],
  exports: [ 
    Ng2AutoCompleteComponent, Ng2AutoCompleteDirective,
    Accordion, AccordionTab,
    ],
  entryComponents: [ 
    Ng2AutoCompleteComponent, 
  ],
})
export class LibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LibModule,
      providers: [ 
        Ng2AutoComplete, 
      ]
    }
  }
}