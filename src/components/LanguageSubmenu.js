import ItemList from './ItemList';

class LanguageSubmenu {
  constructor(props) {
    this.language = JSON.parse(localStorage.getItem('settings'))?.language || 'ru';
    this.changeLanguageApp = props.changeLanguage;
  }

  createSwitchRussianItem() {
    const item = new ItemList({
      label: 'русский(RU)',
      class: 'settings__subitem',
      onClick: () => {
        if (this.language === 'ru') return;
        this.language = 'ru'
        this.changeLanguageApp('ru');
      },
    }).render();

    return item;
  }

  createSwitchEnglishItem() {
    const item = new ItemList({
      label: 'English(ENG)',
      class: 'settings__subitem',
      onClick: () => {
        if (this.language === 'en') return;
        this.language = 'en'
        this.changeLanguageApp('en');
      },
    }).render();

    return item;
  }

  render() {
    const container = document.createElement('ul');

    container.append(this.createSwitchRussianItem(), this.createSwitchEnglishItem());

    return container;
  }
}

export default LanguageSubmenu;