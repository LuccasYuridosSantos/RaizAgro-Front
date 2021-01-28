import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //rota home
  { path: 'home', component: HomeComponent },
  //rota contato
  { path: 'contato', component: ContatoComponent },
  //rota sobre
  { path: 'sobre', component: SobreComponent },
  //rota inicio
  {path: 'inicio', component: InicioComponent},
  //rota tema
  {path: 'tema', component: TemaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
