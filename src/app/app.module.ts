import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { ConfigurationComponent } from './components/Configuracion/configuration.component';
import { FooterComponent } from './pages/footer/footer.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { HTTP_INTERCEPTORS, HttpClientModule, } from '@angular/common/http';
import {AuthGuard} from './auth.guard'
import {TokenInterceptorService} from './services/token-interceptor.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    AboutUsComponent,
    HomeComponent,
    NavBarComponent,
    ConfigurationComponent,
    FooterComponent,
    EquipoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
