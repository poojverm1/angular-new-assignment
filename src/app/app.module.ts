import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChangetextDirective } from './changetext.directive';
import { RouterModule} from '@angular/router';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChangetextDirective,
    View1Component,
    View2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home',
      component:HomeComponent},
      {path: 'view1',
      component:View1Component},
      {path: 'view2',
      component:View2Component}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
