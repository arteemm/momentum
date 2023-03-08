import ItemList from './ItemList';
import { ru, eng } from '../locales';

class HiddenSubmenu {
  constructor() {
    this.audioPlayer = () => document.querySelector('.player');
    this.weather = () => document.querySelector('.weather');
    this.time = () => document.querySelector('.time');
    this.date = () => document.querySelector('.date');
    this.greeting = () => document.querySelector('.greeting-container');
    this.quoteButton = () => document.querySelector('.change-quote');
    this.quote = () => document.querySelector('.quote__container');
    this.language = 'ru';
    this.labelSource = () => this.language === 'ru' ? ru.translation.submenu : eng.translation.submenu;
  }

  changeLanguage(language) {
    this.language = language;
  }

  createAudioHiddenItem() {
    const item = new ItemList({
      label: this.labelSource().hiddenPlayer,
      class: 'settings__subitem',
      onClick: () => {
        item.classList.toggle('settings__subitem_hidden');
        this.audioPlayer().classList.toggle('hidden');
      },
    }).render();

    return item;
  }

  createWeatherHiddenItem() {
    const item = new ItemList({
      label: this.labelSource().hiddenWeather,
      class: 'settings__subitem',
      onClick: () => {
        item.classList.toggle('settings__subitem_hidden');
        this.weather().classList.toggle('hidden');
      }
    }).render();

    return item;
  }

  createTimeHiddenItem() {
    const item = new ItemList({
      label: this.labelSource().hiddenTime,
      class: 'settings__subitem',
      onClick: () => {
        item.classList.toggle('settings__subitem_hidden');
        this.time().classList.toggle('hidden');
      }
    }).render();

    return item;
  }

  createDateHiddenItem() {
    const item = new ItemList({
      label: this.labelSource().hiddenDate,
      class: 'settings__subitem',
      onClick: () => {
        item.classList.toggle('settings__subitem_hidden');
        this.date().classList.toggle('hidden');
      },
    }).render();

    return item;
  }

  createGreetingHiddenItem() {
    const item = new ItemList({
      label: this.labelSource().hiddenGreeting,
      class: 'settings__subitem',
      onClick: () => {
        item.classList.toggle('settings__subitem_hidden');
        this.greeting().classList.toggle('hidden');
      },
    }).render();

    return item;
  }

  createQuoteHiddenItem() {
    const item = new ItemList({
      label: this.labelSource().hiddenQuote,
      class: 'settings__subitem',
      onClick: () => {
        item.classList.toggle('settings__subitem_hidden');
        this.quoteButton().classList.toggle('hidden');
        this.quote().classList.toggle('hidden');
      },
    }).render();

    return item;
  }

  render(language) {
    this.language = language;
    const container = document.createElement('ul');

    container.append(
      this.createAudioHiddenItem(),
      this.createWeatherHiddenItem(),
      this.createTimeHiddenItem(),
      this.createDateHiddenItem(),
      this.createGreetingHiddenItem(),
      this.createQuoteHiddenItem(),
    );

    return container;
  }
}

export default HiddenSubmenu;