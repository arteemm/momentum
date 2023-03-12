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

    this.audioHiddenItem = new ItemList(this.createAudioHiddenItem());
    this.weatherHiddenItem = new ItemList(this.createWeatherHiddenItem());
    this.timeHiddenItem = new ItemList(this.createTimeHiddenItem());
    this.dateHiddenItem = new ItemList(this.createDateHiddenItem());
    this.greetingHiddenItem = new ItemList(this.createGreetingHiddenItem());
    this.quoteHiddenItem = new ItemList(this.createQuoteHiddenItem());
  }
  
  setTextItems(language) {
    const path = language === 'ru' ? ru.translation.submenu : eng.translation.submenu;
    this.audioHiddenItem.label = path.hiddenPlayer;
    this.weatherHiddenItem.label = path.hiddenWeather;
    this.timeHiddenItem.label = path.hiddenTime;
    this.greetingHiddenItem.label = path.hiddenGreeting;
    this.quoteHiddenItem.label = path.hiddenQuote;
  }

  createAudioHiddenItem() {
    return{
      class: 'settings__subitem',
      onClick: (event) => {
        event.target.classList.toggle('settings__subitem_hidden');
        this.audioPlayer().classList.toggle('hidden');
      },
    };
  }

  createWeatherHiddenItem() {
    return {
      class: 'settings__subitem',
      onClick: (event) => {
        event.target.classList.toggle('settings__subitem_hidden');
        this.weather().classList.toggle('hidden');
      }
    };
  }

  createTimeHiddenItem() {
    return {
      class: 'settings__subitem',
      onClick: (event) => {
        event.target.classList.toggle('settings__subitem_hidden');
        this.time().classList.toggle('hidden');
      }
    };
  }

  createDateHiddenItem() {
    return {
      class: 'settings__subitem',
      onClick: (event) => {
        event.target.classList.toggle('settings__subitem_hidden');
        this.date().classList.toggle('hidden');
      },
    };
  }

  createGreetingHiddenItem() {
    return {
      class: 'settings__subitem',
      onClick: (event) => {
        event.target.classList.toggle('settings__subitem_hidden');
        this.greeting().classList.toggle('hidden');
      },
    };
  }

  createQuoteHiddenItem() {
    return {
      class: 'settings__subitem',
      onClick: (event) => {
        event.target.classList.toggle('settings__subitem_hidden');
        this.quoteButton().classList.toggle('hidden');
        this.quote().classList.toggle('hidden');
      },
    };
  }

  render() {
    const container = document.createElement('ul');

    container.append(
      this.audioHiddenItem.render(),
      this.weatherHiddenItem.render(),
      this.timeHiddenItem.render(),
      this.dateHiddenItem.render(),
      this.greetingHiddenItem.render(),
      this.quoteHiddenItem.render(),
    );

    return container;
  }
}

export default HiddenSubmenu;