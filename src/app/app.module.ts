import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ContactComponent } from './contact/contact.component';
import { MyCvComponent } from './my-cv/my-cv.component';
import { FooterSubnavComponent } from './layout/footer-subnav/footer-subnav.component';
import { HeaderSubnavComponent } from './layout/header-subnav/header-subnav.component';
import { LostComponent } from './lost/lost.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    MyWorkComponent,
    ContactComponent,
    MyCvComponent,
    FooterSubnavComponent,
    HeaderSubnavComponent,
    LostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
