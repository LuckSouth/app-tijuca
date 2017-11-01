import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViagensPage } from '../../viagens/viagens';


@IonicPage()
@Component({
  selector: 'geral-dados-motorista',
  templateUrl: 'geral-dados-motorista.html',
})
export class GeralDadosMotoristaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 
}
