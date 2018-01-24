import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

/**
 * Generated class for the ConfiguracionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracion',
  templateUrl: 'configuracion.html',
})
export class ConfiguracionPage {
  city: string;
  state: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    
    this.storage.get('location').then((val) => {
      if(val != null){
        let location = JSON.parse(val);
        this.city = location.city;
        this.state = location.state;
      } else {
        this.city = 'Buenos Aires';
        this.state = 'Argentina';
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracionPage');
  }

  saveForm(){
    let location = {
      city: this.city,
      state: this.state
    }
    console.log(location);
    this.storage.set('location', JSON.stringify(location));
    this.navCtrl.parent.select(0);
  }
}
