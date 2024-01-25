import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/core/header/header.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MundoComponent } from './components/pages/mundo/mundo.component';
import { CharactersComponent } from './components/pages/mundo/characters/characters.component';
import { FormsModule } from '@angular/forms';
import { VaritaComponent } from './components/pages/varita/varita.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { MyareaComponent } from './components/pages/myarea/myarea.component';
import { DetailCharacterComponent } from './components/pages/mundo/characters/detail-character/detail-character.component';
import { CasasComponent } from './components/pages/casas/casas.component';
import { NavCasasComponent } from './components/pages/casas/nav-casas/nav-casas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MundoComponent,
    CharactersComponent,
    VaritaComponent,
    RegisterComponent,
    MyareaComponent,
    DetailCharacterComponent,
    CasasComponent,
    NavCasasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
