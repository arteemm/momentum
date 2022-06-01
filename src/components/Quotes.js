import { getQuote } from '../api';
import { viewQuote } from '../View';

class Quotes {
  constructor() {
    this.changeQuote = () => document.querySelector('.change-quote');
    this.changeQuote().addEventListener('click', this.getQuoteData);
  }

  async getQuoteData() {
    const responce = await getQuote();
    viewQuote(responce);
  }

  render() {
    this.getQuoteData();
  }
}

export default Quotes;