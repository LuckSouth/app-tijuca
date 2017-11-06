import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AbastecimentoBomba2Page } from "../abastecimento-bomba-2/abastecimento-bomba-2";
import { Camera, CameraOptions } from '@ionic-native/camera'

@IonicPage()
@Component({
  selector: 'page-abastecimento-bomba-1',
  templateUrl: 'abastecimento-bomba-1.html',
})
export class AbastecimentoBomba1Page {
  preco;
  litros;
  ultimaFoto;

  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera) {
  }




  getFoto(type) {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: type == "picture" ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      correctOrientation: true
    };


    this.camera.getPicture(options).then((imageData) => {

      this.ultimaFoto = 'data:image/jpeg;base64,' + imageData;

    }, (err) => {
      // Handle error
      console.log('Erro na última foto')
    });
  }



  b() {
    this.navCtrl.push(AbastecimentoBomba2Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Abastecimento3Page');
  }

}
