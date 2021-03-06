import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarService } from './side-bar/side-bar.service';
import { SideBarToggleComponent } from './side-bar-toggle/side-bar-toggle.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  providers:    [ SideBarService ],
  declarations: [ AppComponent, SideBarComponent, SideBarToggleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
