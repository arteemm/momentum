import quotes from '../data/quotes.json';
import { getQuote } from '../api';
import Button from './Button';

class Quote {
  constructor() {
    this.getRandomNumber = (max) => Math.floor(Math.random() * max);
    this.quoteText = document.createElement('p');
    this.quoteText.className = 'quote';
    this.author = document.createElement('p');
    this.author.className = 'author';
  }

  async getQuoteDataEn() {
    const data = await getQuote(this.language);
    const num = this.getRandomNumber(data.length);
    const quote = data[num];
    this.quoteText.textContent = quote.text;
    this.author.textContent = quote.author;
  }

  getQuoteDataRu() {
    const num = this.getRandomNumber(quotes.length);
    const quote = quotes[num];
    this.quoteText.textContent = quote.text;
    this.author.textContent = quote.author;
  }

  createChangeQuoteButton() {
    const button = new Button({
      label: '',
      type: 'button',
      className: 'change-quote',
      onClick: () => this.getTypeQuote()(),
    }).render();
  
    return button;
  }

  getTypeQuote(language = this.language) {
    this.language = language;
    return language === 'ru' ? this.getQuoteDataRu.bind(this) : this.getQuoteDataEn.bind(this);
  }

  render() {
    const container = document.createElement('div');
    container.className = 'quote__container';

    container.append(
      this.createChangeQuoteButton(),
      this.quoteText,
      this.author,
      );

    return container;
  }
}

export default Quote;