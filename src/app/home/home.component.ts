import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/UserLogin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userLogin: UserLogin = new UserLogin

  constructor(

  ) { }

  ngOnInit(){

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

}
