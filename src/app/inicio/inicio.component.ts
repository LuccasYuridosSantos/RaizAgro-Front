import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/postagem';
import { Tema } from '../model/tema';
import { usuario } from '../model/usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  tituloPost: string
  localizacao: string

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
    private alertas: AlertasService,
    private postagemService: PostagemService
    ) { }
    
    ngOnInit() {
    window.scroll(0,0)
  
    if(environment.token == ''){
      this.alertas.showAlertInfo('Sua seção expirou, façaa o login novamente')
      this.router.navigate(['/home'])
    }
    this.getAllTemas()
    this.getAllPostagens()
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
  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=>{
      this.listaPostagens = resp
    })
  }
  findByIdUsuario(){
    this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: usuario)=>{
      this.user = resp
    })
  }
  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.user.id = this.idUsuario
    this.postagem.usuario = this.user

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp
      this.alertas.showAlertSuccess('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
    }, erro =>{
      if(erro.status == 500){
        this.alertas.showAlertDanger('Numero de caracteres excedidos')
    }
  })
    }
  
  findByTituloPostagem(){
    if(this.tituloPost == ''){
      this.getAllPostagens()
    }else{
      this.postagemService.getByTituloPostagem(this.tituloPost).subscribe((resp: Postagem[])=>{
        this.listaPostagens = resp
      })
    }
  } 
  findByLocalizacao(){
    if(this.localizacao == ''){
      this.getAllPostagens()
    }else{
      this.postagemService.getByLocalizacao(this.localizacao).subscribe((resp: Postagem[])=>{
        this.listaPostagens = resp
      })
    }
  }
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
