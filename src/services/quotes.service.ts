import { Quote } from '../data/quote.interface';

export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  addToFavorites(quote: Quote) {
    this.favoriteQuotes.push(quote);

    console.log(this.favoriteQuotes);
  }

  removeFromFavorites(quote: Quote) {
    const position = this.favoriteQuotes.findIndex((q) => {
      return q.id == quote.id;
    });

    this.favoriteQuotes.splice(position, 1);
  }

  getFavoriteQuotes(){
    return this.favoriteQuotes;
  }

  isFavorite(quote: Quote) {
    return this.favoriteQuotes.find((q: Quote) => {
      return q.id == quote.id;
    });
  }  
}