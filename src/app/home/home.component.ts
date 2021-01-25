import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from '../model/usuario';
import { usuarioLogin } from '../model/usuarioLogin';
import { AuthService } from '../service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuario: usuario = new usuario
  usuarioLogin: usuarioLogin = new usuarioLogin()
  nomeCompleto: string
  confirmSenha: string
  tipoUsario: string
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    var btn = (<HTMLSelectElement>document.querySelector('#btn-senha'));
    var input =(<HTMLInputElement>document.querySelector('#senha'));
    btn.addEventListener('click', function() {
      if(input.getAttribute('type') == 'password') {
          input.setAttribute('type', 'text');
          btn.innerHTML = '<i class="fa fa-eye-slash" aria-hidden="true"></i>';
      } else {
          input.setAttribute('type', 'password');
          btn.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>';
      }
    });
  }


  confirmarSenha(event: any){
    this.confirmSenha = event.target.value

  }

  tipoUser(event: any){
    this.tipoUsario = event.target.value
  }

  cadastrar(){
    this.usuario.tipo = this.tipoUsario

    if(this.usuario.senha != this.confirmSenha){
      alert('A senhas estao incorretas')
    }else{
      this.authService.cadastrar(this.usuario).subscribe((resp: usuario) =>{
        this.usuario = resp

        this.router.navigate(['/entrar'])

        alert('Usuario cadastrado com sucesso')
      })
    }
  }
  entrar(){
    this.authService.login(this.usuarioLogin).subscribe((respo:usuarioLogin)=>{
      this.usuarioLogin = respo

      environment.token = this.usuarioLogin.token
      environment.nome = this.usuarioLogin.nome
      environment.id = this.usuarioLogin.id
      environment.foto = this.usuarioLogin.foto
      
      this.usuarioLogin.foto

      this.router.navigate(['/inicio'])
    }, erro =>{
      if(erro == 500){
        alert('Usuario ou senha invalido')
      }
    })
  }

}