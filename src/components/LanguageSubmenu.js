import ItemList from './ItemList';

class LanguageSubmenu {
  constructor(props) {
    this.changeLanguageApp = props.changeLanguage;
  }

  createSwitchRussianItem() {
    const item = new ItemList({
      label: 'русский(RU)',
      class: 'settings__subitem',
      onClick: () => {
        if (this.language === 'ru') return;
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