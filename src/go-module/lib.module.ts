import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2AutoCompleteComponent, Ng2AutoCompleteDirective, Ng2AutoComplete } from 'ng2-auto-complete';

import { Accordion, AccordionTab } from 'primeng/primeng';
import { DataGrid,  Panel, Dialog, Paginator } from 'primeng/primeng';
import { DataTable, ColumnHeaders, ColumnFooters, TableBody, ScrollableView, DTCheckbox, DTRadioButton, RowExpansionLoader } from 'primeng/primeng';
import { Galleria } from 'primeng/primeng';
import { TabViewNav, TabPanel, TabView } from 'primeng/primeng';
import { Tooltip } from 'primeng/primeng';
import { Tree, UITreeNode, TreeNodeTemplateLoader } from 'primeng/primeng';
//primeng shared module
import { Header,Footer,Column,TemplateWrapper,ColumnHeaderTemplateLoader,ColumnBodyTemplateLoader,ColumnFooterTemplateLoader,ColumnFilterTemplateLoader,PrimeTemplate,TemplateLoader,Row,HeaderColumnGroup,FooterColumnGroup,ColumnEditorTemplateLoader } from 'primeng/primeng';


@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule,
    // DataTableModule,
  ],
  declarations: [ 
    Ng2AutoCompleteComponent, Ng2AutoCompleteDirective,
    Accordion, AccordionTab,
    DataGrid, Panel, Dialog, Paginator,
    DataTable, ColumnHeaders, ColumnFooters, TableBody, ScrollableView, DTCheckbox, DTRadioButton, RowExpansionLoader,
    Galleria,
    TabViewNav, TabPanel, TabView,
    Tooltip,
    Tree, UITreeNode, TreeNodeTemplateLoader,
    //primeng shared module
    Header,Footer,Column,TemplateWrapper,ColumnHeaderTemplateLoader,ColumnBodyTemplateLoader,ColumnFooterTemplateLoader,ColumnFilterTemplateLoader,PrimeTemplate,TemplateLoader,Row,HeaderColumnGroup,FooterColumnGroup,ColumnEditorTemplateLoader
    ],
  exports: [ 
    Ng2AutoCompleteComponent, Ng2AutoCompleteDirective,
    Accordion, AccordionTab,
    DataGrid,  Panel, Dialog, Paginator,
    DataTable, ColumnHeaders, ColumnFooters, TableBody, ScrollableView, DTCheckbox, DTRadioButton, RowExpansionLoader,
    Galleria,
    TabViewNav, TabPanel, TabView,
    Tooltip,
    Tree,
    //primeng shared module
    Header,Footer,Column,TemplateWrapper,ColumnHeaderTemplateLoader,ColumnBodyTemplateLoader,ColumnFooterTemplateLoader,ColumnFilterTemplateLoader,PrimeTemplate,TemplateLoader,Row,HeaderColumnGroup,FooterColumnGroup,ColumnEditorTemplateLoader
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