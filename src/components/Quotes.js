import quotes from '../data/quotes.json';
import { viewQuote } from '../View';
import { getQuote } from '../api';

class Quotes {
  constructor() {
    this.language = 'ru';
    this.changeQuote = () => document.querySelector('.change-quote');
    this.changeQuote().addEventListener('click', this.render.bind(this));
    this.getRandomNumber = (max) => Math.floor(Math.random() * max);
  }

  setLanguage(language) {
    this.language = language;
  }

  async getQuoteDataEn() {
    const data = await getQuote(this.language);
    const num = this.getRandomNumber(data.length);
    const quote = data[num];
    viewQuote(quote);
  }

  getQuoteDataRu() {
    const num = this.getRandomNumber(quotes.length);
    const quote = quotes[num];
    viewQuote(quote);
  }

  render() {
    const quoteFunc = this.language === 'ru' ? this.getQuoteDataRu.bind(this) : this.getQuoteDataEn.bind(this);

    quoteFunc();
  }
}

export default Quotes;