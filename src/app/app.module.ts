import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownComponent } from './header/dropdown/dropdown.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CatalogsPageComponent } from './catalogs-page/catalogs-page.component';
import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { DropdownDirective } from './shared/dropdown.directive';
import { PhoneViewComponent } from './header/phone-view/phone-view.component';
import { PhoneDropdownComponent } from './header/dropdown/phone-dropdown/phone-dropdown.component';
import { UpperBannerComponent } from './main-page/upper-banner/upper-banner.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IntroBannerComponent } from './catalogs-page/intro-banner/intro-banner.component';
import { SortBannerComponent } from './catalogs-page/content-banner/sort-banner/sort-banner.component';
import { ContentBannerComponent } from './catalogs-page/content-banner/content-banner.component';
import { SortPanelComponent } from './catalogs-page/content-banner/sort-panel/sort-panel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownComponent,
    MainPageComponent,
    CatalogsPageComponent,
    ArticlesPageComponent,
    AboutUsPageComponent,
    LoginPageComponent,
    DropdownDirective,
    PhoneViewComponent,
    PhoneDropdownComponent,
    UpperBannerComponent,
    NotFoundComponent,
    IntroBannerComponent,
    SortBannerComponent,
    ContentBannerComponent,
    SortPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
