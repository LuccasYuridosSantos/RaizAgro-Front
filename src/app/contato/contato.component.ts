import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  @ViewChild("alert") alertElem: ElementRef;
  @ViewChild("disabled") disableElem: ElementRef;

  constructor(
    private alert: AlertasService,
    private router: Router
  ) { }

  ngOnInit(){

  }

  validaEmail(event: any){
    var str = event.target.value;
    if (str.indexOf("@")!=-1){
      this.alertElem.nativeElement.removeAttribute('alert-email','');
      this.disableElem.nativeElement.removeAttribute('disabled', '');
    }else{
      this.alertElem.nativeElement.setAttribute('alert-email','');
      this.disableElem.nativeElement.setAttribute('disabled', '');
    }
    
    
  }

  enviar(){
    this.alert.showAlertSuccess('Mensagem enviada com sucesso!')
    this.router.navigate(['/home'])

  }
  
 }
