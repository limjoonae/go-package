/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/',
      'go:': 'dist/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'go-module': 'dist/gomodule.bundle.js',
      'go-image-gallery': 'go-module/component/go-image-gallery',

      'numeral': 'npm:numeral/min/numeral.min.js',
      'ng2-auto-complete':'npm:ng2-auto-complete/dist/ng2-auto-complete.umd.js',
      'ng2-bootstrap':'npm:ng2-bootstrap/bundles/ng2-bootstrap.umd.js',
      'angular2-modal':           'npm:angular2-modal/bundles/angular2-modal.umd.js',
      'angular2-modal-bootstrap': 'npm:angular2-modal/bundles/angular2-modal.bootstrap.umd.js',
      'ng2-select': 'npm:ng2-select/bundles/ng2-select.umd.js',
      'chart.js': 'npm:chart.js/dist/Chart.bundle.min.js',
      'ng2-charts': 'npm:ng2-charts',
      'primeng': 'npm:primeng',
      'angular2-image-popup':'npm:angular2-image-popup/directives/angular2-image-popup',
      'ng-sidebar': 'npm:ng-sidebar',
      'moment': 'npm:moment',
      'ng2-table': 'npm:ng2-table',
      'tinymce': 'npm:tinymce',

      // 'ng2-markdown-to-html':         	'npm:ng2-markdown-to-html',
      // 'marked': 'npm:marked/lib/marked.js',
      // 'prismjs': 'npm:prismjs',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'go-image-gallery': {
        main: './image-gallery.module.js',
          defaultExtension: 'js',
      },
      'ng2-charts': {
          main: './ng2-charts.js',
          defaultExtension: 'js',
       },
       'primeng': {
        // main: './primeng.js',
        defaultExtension: 'js'
      },
      'angular2-image-popup': {
        main: './image-modal-popup.js',
        defaultExtension: 'js'
      },
      'ng-sidebar': {
          main: './lib/index.js',
          defaultExtension: 'js'
       },
       'moment': {
         main: './moment.js',
         defaultExtension: 'js'
      },
      'ng2-table': {
          main: './ng2-table.js',
          defaultExtension: 'js'
       },
       'tinymce': {
          main: './tinymce.min.js',
          defaultExtension: 'js'
       },
    }
  });
})(this);
