import ItemList from './ItemList';
import { ru, eng } from '../locales';

class HiddenSubmenu {
  constructor() {
    this.audioPlayer = () => document.querySelector('.player');
    this.weather = () => document.querySelector('.weather');
    this.time = () => document.querySelector('.time');
    this.date = () => document.querySelector('.date');
    this.greeting = () => document.querySelector('.greeting-container');
    this.quote = () => document.querySelector('.quote__container');

    this.audioHiddenItem = new ItemList(this.createAudioHiddenItem());
    this.weatherHiddenItem = new ItemList(this.createWeatherHiddenItem());
    this.timeHiddenItem = new ItemList(this.createTimeHiddenItem());
    this.dateHiddenItem = new ItemList(this.createDateHiddenItem());
    this.greetingHiddenItem = new ItemList(this.createGreetingHiddenItem());
    this.quoteHiddenItem = new ItemList(this.createQuoteHiddenItem());

    this.hiddenElements = JSON.parse(localStorage.getItem('settings')).hiddenElements || [];
    window.addEventListener('DOMContentLoaded', this.setHiddenElementsOriginally.bind(this));
  }

  setHiddenElementsOriginally() {
    this.hiddenElements.forEach(element => {
      switch (element) {
        case 'audioPlayer':
          this.createAudioHiddenItem(true).onClick();
        break;
        case 'weather':
          this.createWeatherHiddenItem(true).onClick();
        break;
        case 'time':
          this.createTimeHiddenItem(true).onClick();
        break;
        case 'date':
          this.createDateHiddenItem(true).onClick();
        break;
        case 'greeting':
          this.createGreetingHiddenItem(true).onClick();
        break;
        case 'quote':
          this.createQuoteHiddenItem(true).onClick();
        break;
        default: break;
      }
    });
  }
  
  setTextItems(language) {
    const path = language === 'ru' ? ru.translation.submenu : eng.translation.submenu;
    this.audioHiddenItem.label = path.hiddenPlayer;
    this.weatherHiddenItem.label = path.hiddenWeather;
    this.timeHiddenItem.label = path.hiddenTime;
    this.dateHiddenItem.label = path.hiddenDate;
    this.greetingHiddenItem.label = path.hiddenGreeting;
    this.quoteHiddenItem.label = path.hiddenQuote;
  }

  checkHiddenElements(element) {
    const index = this.hiddenElements.indexOf(element)
    if (index >= 0) {
      this.hiddenElements.splice(index, 1);
      return;
    }
    this.hiddenElements.push(element);
  }

  createAudioHiddenItem(mode = false) {
    return{
      class: 'settings__subitem',
      onClick: () => {
        this.audioHiddenItem.item.classList.toggle('settings__subitem_hidden');
        this.audioPlayer().classList.toggle('hidden');
        if (!mode) this.checkHiddenElements('audioPlayer');
        if (mode) this.audioHiddenItem.class += ' settings__subitem_hidden';
      },
    };
  }

  createWeatherHiddenItem(mode = false) {
    return {
      class: 'settings__subitem',
      onClick: () => {
        this.weatherHiddenItem.item.classList.toggle('settings__subitem_hidden');
        this.weather().classList.toggle('hidden');
        if (!mode) this.checkHiddenElements('weather');
        if (mode) this.weatherHiddenItem.class += ' settings__subitem_hidden';
      }
    };
  }

  createTimeHiddenItem(mode = false) {
    return {
      class: 'settings__subitem',
      onClick: () => {
        this.timeHiddenItem.item.classList.toggle('settings__subitem_hidden');
        this.time().classList.toggle('hidden');
        if (!mode) this.checkHiddenElements('time');
        if (mode) this.timeHiddenItem.class += ' settings__subitem_hidden';
      }
    };
  }

  createDateHiddenItem(mode = false) {
    return {
      class: 'settings__subitem',
      onClick: () => {
        this.dateHiddenItem.item.classList.toggle('settings__subitem_hidden');
        this.date().classList.toggle('hidden');
        if (!mode) this.checkHiddenElements('date');
        if (mode) this.dateHiddenItem.class += ' settings__subitem_hidden';
      },
    };
  }

  createGreetingHiddenItem(mode = false) {
    return {
      class: 'settings__subitem',
      onClick: () => {
        this.greetingHiddenItem.item.classList.toggle('settings__subitem_hidden');
        this.greeting().classList.toggle('hidden');
        if (!mode) this.checkHiddenElements('greeting');
        if (mode) this.greetingHiddenItem.class += ' settings__subitem_hidden';
      },
    };
  }

  createQuoteHiddenItem(mode = false) {
    return {
      class: 'settings__subitem',
      onClick: () => {
        this.quoteHiddenItem.item.classList.toggle('settings__subitem_hidden');
        this.quote().classList.toggle('hidden');
        if (!mode) this.checkHiddenElements('quote');
        if (mode) this.quoteHiddenItem.class += ' settings__subitem_hidden';
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