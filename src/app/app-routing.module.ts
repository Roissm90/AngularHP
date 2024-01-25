import { CasasComponent } from './components/pages/casas/casas.component';
import { DetailCharacterComponent } from './components/pages/mundo/characters/detail-character/detail-character.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MundoComponent } from './components/pages/mundo/mundo.component';
import { VaritaComponent } from './components/pages/varita/varita.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { MyareaComponent } from './components/pages/myarea/myarea.component';
import { loginGuard } from './guards/login.guard';
import { checkuserGuard } from './guards/checkuser.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mundomagico', component: MundoComponent },
  { path: 'varita', component: VaritaComponent, canActivate: [loginGuard] },
  { path: 'login', component: RegisterComponent, canActivate: [checkuserGuard] },
  { path: 'miarea', component: MyareaComponent, canActivate: [loginGuard] },
  { path: 'detalle/:id', component: DetailCharacterComponent },
  { path: 'casas', component: CasasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
