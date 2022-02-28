import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { SimpleSmoothScrollModule } from 'ng2-simple-smooth-scroll';
import { AppComponent } from './app.component';
import { Components2Component } from './components2/components2.component';

@NgModule({
  declarations: [
    AppComponent,
    Components2Component
  ],
  imports: [
    BrowserModule,
    NgImageFullscreenViewModule,
    SimpleSmoothScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
