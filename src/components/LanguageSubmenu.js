import ItemList from './ItemList';

class LanguageSubmenu {
  constructor() {
    this.currentLanguage = 'RU';
  }

  changeRuLanguage() {
    this.currentLanguage = 'RU';
    console.log(this.currentLanguage);
  }

  changeENGLanguage() {
    this.currentLanguage = 'ENG';
    console.log(this.currentLanguage);
  }

  createSwitchRussianItem() {
    const item = new ItemList({
      label: 'русский(RU)',
      class: 'settings__subitem',
      onClick: this.changeRuLanguage,
    }).render();

    return item;
  }

  createSwitchEnglishItem() {
    const item = new ItemList({
      label: 'English(ENG)',
      class: 'settings__subitem',
      onClick: this.changeENGLanguage,
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