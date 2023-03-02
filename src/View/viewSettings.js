import { ItemList, LanguageSubmenu, SourceSubmenu } from '../components';

class ViewSettings {
  constructor(props) {
    this.languageSubmenu = new LanguageSubmenu().render();
    this.sourceSubmenu = new SourceSubmenu(props).render();
  
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
    const item = new ItemList({
      label: 'язык',
      class: 'settings__item',
      onClick: () => {
        this.currentSubmenu = this.languageSubmenu;
        this.changeSubmenu();
      },
    }).render();

    return item;
  }

  createSourceItem() {
    const item = new ItemList({
      label: 'источник',
      class: 'settings__item',
      onClick: () => {
        this.currentSubmenu = this.sourceSubmenu;
        this.changeSubmenu();
      },
    }).render();

    return item;
  }

  createTagItem() {
    const item = new ItemList({
      label: 'тег',
      class: 'settings__item',
      onClick: () => console.log(333),
    }).render();

    return item;
  }

  createSwitchHiddenItem() {
    const item = new ItemList({
      label: 'скрыть',
      class: 'settings__item',
      onClick: () => console.log(444),
    }).render();

    return item;
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



{/* <ul class="settings__list">
          <li class="settings__item">
            <span class="settings__item-name">язык</span>
            <ul class="settings__submenu">
              <li class="settings__subitem">English</li>
              <li class="settings__subitem">Русский</li>
            </ul>
          </li>
          <li class="settings__item">
            <span class="settings__item-name">источник</span>
            <ul class="settings__submenu">
              <li class="settings__subitem">мои картинки</li>
              <li class="settings__subitem">сплэш</li>
            </ul>
          </li>
          <li class="settings__item">
            <span class="settings__item-name">тег</span>
            <ul class="settings__submenu">
              <li class="settings__subitem">summer</li>
              <li class="settings__subitem">autumn</li>
              <li class="settings__subitem">winter</li>
              <li class="settings__subitem">spring</li>
            </ul>
          </li>
          <li class="settings__item">
            <span class="settings__item-name">скрыть</span>
            <ul class="settings__submenu">
              <li class="settings__subitem">Погода</li>
              <li class="settings__subitem">Плеер</li>
              <li class="settings__subitem">Часы</li>
              <li class="settings__subitem">Цитаты</li>
            </ul>
          </li>
</ul> */}