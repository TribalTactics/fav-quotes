import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes.service';
import { QuotePage } from '../quote/quote';

// Services
import { SettingsService } from '../../services/settings.service';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  
  favoriteQuotes: Quote[];
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public quotesService: QuotesService,
    public modalCtrl: ModalController,
    public settingsService: SettingsService
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  ionViewWillEnter() {
    this.favoriteQuotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();

    modal.onDidDismiss((remove) => {
      if (remove){
        this.quotesService.removeFromFavorites(quote);
        this.favoriteQuotes = this.quotesService.getFavoriteQuotes();
      } else {
        console.log('do not remove this quote');
      }
    });
  }

  onRemoveFromFavorites(quote: Quote){
    this.quotesService.removeFromFavorites(quote);
  }

  getBackground(){
    return this.settingsService.getAlternativeBackground() ? 'altQuoteBackground' : 'quoteBackground';
  }

}
