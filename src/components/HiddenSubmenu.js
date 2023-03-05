import ItemList from './ItemList';

class HiddenSubmenu {
  constructor() {
    this.audioPlayer = () => document.querySelector('.player');
    this.weather = () => document.querySelector('.weather');
    this.time = () => document.querySelector('.time');
    this.date = () => document.querySelector('.date');
    this.greeting = () => document.querySelector('.greeting-container');
    this.quoteButton = () => document.querySelector('.change-quote');
    this.quote = () => document.querySelector('.quote__container');
  }

  createAudioHiddenItem() {
    const item = new ItemList({
      label: 'скрыть аудио плеер',
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
      label: 'скрыть виджет погоды',
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
      label: 'скрыть часы',
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
      label: 'скрыть дату',
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
      label: 'скрыть приветствие',
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
      label: 'скрыть цитаты',
      class: 'settings__subitem',
      onClick: () => {
        item.classList.toggle('settings__subitem_hidden');
        this.quoteButton().classList.toggle('hidden');
        this.quote().classList.toggle('hidden');
      },
    }).render();

    return item;
  }

  render() {
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