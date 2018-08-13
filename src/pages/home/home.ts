import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { OrcamentoPage } from '../orcamento/orcamento';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  backgrounds = [
    'assets/imgs/bk/1.jpg',
    'assets/imgs/bk/2.jpg',
    'assets/imgs/bk/3.jpg'

  ]
  ultimo : string = '';
  public placaForm: any;
  

  constructor( public formBuilder: FormBuilder ,public navCtrl: NavController) {
    this.placaForm = formBuilder.group({
      
      placa: ['', Validators.compose([Validators.minLength(4), Validators.maxLength(4), Validators.required])]
    });

    
  }

  onKeyup(evento : KeyboardEvent){
    //console.log((<HTMLInputElement> evento.target).value);

    var placa = (<HTMLInputElement> evento.target).value;

     this.ultimo = (placa.charAt(placa.length-1));

    console.log(this.ultimo);


    }
    
  buscar() {
    if (this.ultimo == '1') {
      alert("Vence  02/04/2018");

    }
    if (this.ultimo == '2') {
      alert("Vence 04/04/2018");

    }
    if (this.ultimo == '3') {
      alert("Vence 06/04/2018");

    }
    if (this.ultimo == '4') {
      alert("Vence 09/04/2018");

    }
    if (this.ultimo == '5') {
      alert("Vence 11/04/2018");

    }
    if (this.ultimo == '6') {
      alert("Vence 13/04/2018");

    }
    if (this.ultimo == '7') {
      alert("Vence 16/04/2018");

    }
    if (this.ultimo == '8') {
      alert("Vence 18/04/2018");

    }
    if (this.ultimo == '9') {
      alert("Vence 20/04/2018");

    }
    if (this.ultimo == '0') {
      alert("Vence 23/04/2018");


    }


  }

  goOrgcamento(){
    this.navCtrl.push(OrcamentoPage);
  }
  
  }

  


