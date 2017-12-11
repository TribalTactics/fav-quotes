import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Quote } from '../../data/quote.interface'
import { QuotesService } from '../../services/quotes.service'

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  
  quoteGroup: {category: string, quotes: Quote[], icon: string};
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public quotesService: QuotesService
  ) {
    this.quoteGroup = this.navParams.data;

    console.log(this.quoteGroup.category);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
  }

  onAddToFavorite(selectedQuote: Quote) {
    const alert = this.alertCtrl.create(
      {
        title: 'Add To Favorite',
        subTitle: 'Are you sure?',
        message: 'Are you sure you want to favorite this quote?',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              this.quotesService.addToFavorites(selectedQuote);
            }
          },
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              console.log('You said no.');
            }
          }
        ]
      }
    );

    alert.present();
  }

}
