import quotes from '../quotes.json';
import { viewQuote } from '../View';

class Quotes {
  constructor() {
    this.changeQuote = () => document.querySelector('.change-quote');
    this.changeQuote().addEventListener('click', this.getQuoteData.bind(this));
    this.getRandomNumber = (max) => Math.floor(Math.random() * max);
  }

  

  getQuoteData() {
    const num = this.getRandomNumber(quotes.length);
    const quote = quotes[num];
    viewQuote(quote);
  }

  render() {
    this.getQuoteData();
  }
}

export default Quotes;