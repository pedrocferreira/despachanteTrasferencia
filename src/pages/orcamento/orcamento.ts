import { CaminhaoPage } from './../caminhao/caminhao';
import { CarroPage } from './../carro/carro';
import { MotoPage } from './../moto/moto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrcamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orcamento',
  templateUrl: 'orcamento.html',
})
export class OrcamentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrcamentoPage');
  }

  gotoMoto(){
    this.navCtrl.push(MotoPage);
  }
  gotoCarro(){
    this.navCtrl.push(CarroPage)
  }

  gotoCaminhao(){
    this.navCtrl.push(CaminhaoPage)
  }
}
