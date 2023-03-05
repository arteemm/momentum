import { ItemList, LanguageSubmenu, SourceSubmenu, TagsSubmenu, HiddenSubmenu } from '../components';
import { ru, eng } from '../locales';

class ViewSettings {
  constructor(props) {
    this.language = 'ru';
    this.languageSubmenu = new LanguageSubmenu({
      ...props,
      changeLanguageSettings: this.setLanguage.bind(this),
    }).render();
    this.sourceSubmenu = new SourceSubmenu(props).render();
    this.tagsSubmenu = new TagsSubmenu(props).render();
    this.hiddenSubmenu = new HiddenSubmenu().render();
  
    this.container = () => document.querySelector('.settings__menu');
    this.submenu = () => document.querySelector('.settings__submenu');
    this.currentSubmenu = this.languageSubmenu;

    this.submenu().append(this.currentSubmenu);
  }

  clearSubmenu() {
    const container = this.submenu();

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

  changeSubmenu() {
    this.clearSubmenu();
    this.submenu().append(this.currentSubmenu);
  }
  
  createLanguageItem() {
    const label = this.language === 'ru' ?
    ru.translation.settings.language :
    eng.translation.settings.language;

    const item = new ItemList({
      label,
      class: 'settings__item',
      onClick: () => {
        this.currentSubmenu = this.languageSubmenu;
        this.changeSubmenu();
      },
    }).render();

    return item;
  }

  createSourceItem() {
    const label = this.language === 'ru' ?
    ru.translation.settings.source :
    eng.translation.settings.source;

    const item = new ItemList({
      label,
      class: 'settings__item',
      onClick: () => {
        this.currentSubmenu = this.sourceSubmenu;
        this.changeSubmenu();
      },
    }).render();

    return item;
  }

  createTagItem() {
    const label = this.language === 'ru' ?
    ru.translation.settings.tag :
    eng.translation.settings.tag;

    const item = new ItemList({
      label,
      class: 'settings__item',
      onClick: () =>{
        this.currentSubmenu = this.tagsSubmenu;
        this.changeSubmenu();
      },
    }).render();

    return item;
  }

  createSwitchHiddenItem() {
    const label = this.language === 'ru' ?
    ru.translation.settings.hidden :
    eng.translation.settings.hidden;

    const item = new ItemList({
      label,
      class: 'settings__item',
      onClick: () => {
        this.currentSubmenu = this.hiddenSubmenu;
        this.changeSubmenu();
      },
    }).render();

    return item;
  }

  setLanguage(language) {
    this.language = language;
  }

  render() {
    const list = document.createElement('ul');
    list.className = 'settings__list';

    list.append(
      this.createLanguageItem(),
      this.createSourceItem(),
      this.createTagItem(),
      this.createSwitchHiddenItem()
    );
        
    return list;
  }
};

export default ViewSettings;