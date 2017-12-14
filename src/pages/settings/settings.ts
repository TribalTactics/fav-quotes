import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toggle } from 'ionic-angular';

import { SettingsService } from '../../services/settings.service';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
  	public settingsService: SettingsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  onToggle(toggle: Toggle) {
  	this.settingsService.setAlternativeBackground(toggle.checked);
  }

  getAlternativeBackground(){
    return this.settingsService.getAlternativeBackground();	
  }

}
