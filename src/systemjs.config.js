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

      // library for primeng
      '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
      '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
      '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',

      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      // 'go-module': 'dist/gomodule.bundle.js',

      'numeral': 'npm:numeral/min/numeral.min.js',
      'ng2-auto-complete':'npm:ng2-auto-complete/dist/ng2-auto-complete.umd.js',
      'ng2-bootstrap':'npm:ng2-bootstrap/bundles/ng2-bootstrap.umd.js',
      'ng2-select': 'npm:ng2-select/bundles/ng2-select.umd.js',
      'chart.js': 'npm:chart.js/dist/Chart.bundle.min.js',
      'ng2-charts': 'npm:ng2-charts',
      'primeng': 'npm:primeng',
      'angular2-image-popup':'npm:angular2-image-popup/directives/angular2-image-popup',
      'ng-sidebar': 'npm:ng-sidebar',
      'moment': 'npm:moment',
      'ng2-table': 'npm:ng2-table',
      'tinymce': 'npm:tinymce',

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
