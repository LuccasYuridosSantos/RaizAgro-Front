import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from '../model/usuario';
import { usuarioLogin } from '../model/usuarioLogin';
import { AuthService } from '../service/auth.service';
import { environment } from 'src/environments/environment.prod';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario: usuario = new usuario()
  usuarioLogin: usuarioLogin = new usuarioLogin()
  nomeCompleto: string
  confirmSenha: string
  corfirmarEmail: string
  tipoUsario: string
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    var btn = (<HTMLSelectElement>document.querySelector('#btn-senha'));
    var input = (<HTMLInputElement>document.querySelector('#senha'));
    btn.addEventListener('click', function () {
      if (input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
        btn.innerHTML = '<i class="fa fa-eye-slash" aria-hidden="true"></i>';
      } else {
        input.setAttribute('type', 'password');
        btn.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>';
      }
    });
  }

  corfimarEmail(event: any) {
    this.corfimarEmail = event.target.value
  }
  confirmarSenha(event: any) {
    this.confirmSenha = event.target.value

  }

  tipoUser(event: any) {
    this.tipoUsario = event.target.value
  }

  cadastrar() {
    this.usuario.tipo = 'normal'
    if (this.usuario.email.indexOf('@') == -1) {
      this.alertas.showAlertDanger('E-mail inválido')
    }



    if (this.usuario.senha.length < 6) {
      this.alertas.showAlertDanger('Sua senha deve ter no mínimo 6 caracteres')
    }

    if (this.usuario.usuario.length < 5) {
      this.alertas.showAlertDanger('Seu usuário deve ter no mínimo 5 caracteres')
    }

    if (this.usuario.nomeCompleto == null || this.usuario.usuario == null || this.usuario.email == null || this.usuario.senha == null) {
      this.router.navigate(['/entrar'])
      this.alertas.showAlertDanger('Usuário não cadastrado, preencha corretamente os campos')
    }

    if (this.usuario.senha != this.confirmSenha) {
      this.alertas.showAlertDanger('As senhas estão incorretas')

    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: usuario) => {
        this.usuario = resp

        this.router.navigate(['/entrar'])

        this.alertas.showAlertSuccess('Usuário cadastrado com sucesso')
      }, erro => {
        if (erro.status == 409) {
          this.alertas.showAlertDanger('Usuário já cadastrado, escolha outro usuário')
        }
      })
    }
  }
  entrar() {
    this.authService.login(this.usuarioLogin).subscribe((respo: usuarioLogin) => {
      this.usuarioLogin = respo

      environment.token = this.usuarioLogin.token
      environment.nomeCompleto = this.usuarioLogin.nomeCompleto
      environment.id = this.usuarioLogin.id
      environment.foto = this.usuarioLogin.foto
      environment.tipo = this.usuarioLogin.tipo

      this.usuarioLogin.foto

      this.router.navigate(['/inicio'])
    }, erro => {
      if (erro.status == 500) {
        this.alertas.showAlertDanger('Usuário ou senha estão incorretos!')
      }
    })
  }

}
