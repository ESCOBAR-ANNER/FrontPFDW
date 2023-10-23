import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ConfigurationComponent } from './components/Configuracion/configuration.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistroComponent},
  {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'users', component: EquipoComponent},
  {path: 'private-users', component: ConfigurationComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers:[AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
