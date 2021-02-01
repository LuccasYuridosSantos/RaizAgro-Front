import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
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
  {path: 'tema', component: TemaComponent},
  //rota para edit e delete TEMA
  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent},
<<<<<<< HEAD
  //rota para edit e delete POSTAGEM
  {path:'postagem-edit/:id',component: PostagemEditComponent},
  {path:'postagem-delete/:id',component: PostagemEditComponent}
=======
  //rota para editar usuario
  {path: 'usuario-edit/:id', component:UsuarioEditComponent}

>>>>>>> main
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
