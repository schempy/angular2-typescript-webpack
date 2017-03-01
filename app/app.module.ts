import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import {AppComponent}  from './app.component';
import {IndexComponent} from './index/index.component';

@NgModule({
    imports:        [BrowserModule, CommonModule],
    declarations:   [AppComponent, IndexComponent],
    bootstrap:      [AppComponent]
})

export class AppModule {}
