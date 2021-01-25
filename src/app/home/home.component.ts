import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuario: Usuario = new Usuario
  userLogin: UserLogin = new UserLogin

  confirmarSenha: string

  tipoUsuario: string
  

  constructor(
    private authService: AuthService
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

  confirmeSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value;
  }

  cadastrar(){
    this.usuario.tipo = this.tipoUsuario

    if(this.usuario.senha != this.confirmarSenha){
      alert("As senhas estão incorretas.")
    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        alert("Usuario cadastrado com sucesso")
      })
    }
  }

}

