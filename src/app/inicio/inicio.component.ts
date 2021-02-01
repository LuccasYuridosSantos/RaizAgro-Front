import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/tema';
import { usuario } from '../model/usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  nomeTema: string

  user: usuario = new usuario()
  idUsuario = environment.id

  key = 'data'
  reverse = true

  constructor(
    private router: Router,
    private temaService: TemaService,
    public authService: AuthService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {

    window.scroll(0,0)

    if(environment.token == ''){
      alert('Sua seção expirou, façaa o login novamente')
      this.router.navigate(['/home'])
    }
    this.getAllTemas()
   // this.getAllPostagens()
  }
  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })
  }
  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }
  // getAllPostagens(){
  //   this.PostagemService.getAllPostagens().subscribe((resp: Postagem[])=>{
  //     this.listaPostagens = resp
  //   })
  // }
  // findByIdUser(){
  //   this.authService.getByIdUser(this.idUsuario).subscribe((resp: Usuario)=>{
  //     this.user = resp
  //   })
  // }
  // publicar(){
  //   this.tema.id = this.idTema
  //   this.postagem.tema = this.tema

  //   this.user.id = this.idUsuario
  //   this.postagem.usuario = this.user

  //   this.PostagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
  //     this.postagem = resp
  //     this.alertas.showAlertSuccess('Postagem realizada com sucesso!')
  //     this.postagem = new Postagem()
  //     this.getAllPostagens()
  //   })
  // }
  // findByTituloPostagem(){
  //   if(this.tituloPost == ''){
  //     this.getAllPostagens()
  //   }else{
  //     this.PostagemService.getByTituloPostagem(this.tituloPost).subscribe((resp: Postagem[])=>{
  //       this.listaPostagens = resp
  //     })
  //   }
  // }
  findByNomeTema(){
    if(this.nomeTema == ''){
      this.getAllTemas()
    }else{
      this.temaService.getByNomeTema(this.nomeTema).subscribe((resp: Tema[])=>{
        this.listaTemas = resp
      })
    }
  }
}
