import { ItemList, LanguageSubmenu, SourceSubmenu, TagsSubmenu, HiddenSubmenu } from '../components';
import { ru, eng } from '../locales';

class ViewSettings {
  constructor(props) {
    this.languageSubmenu = new LanguageSubmenu({
      ...props,
      changeActiveItem: this.changeActiveItem,
    });
    this.tagsSubmenu = new TagsSubmenu(props);
    this.sourceSubmenu = new SourceSubmenu({
      ...props,
      tagSubmenuInput: this.tagsSubmenu.input,
      changeActiveItem: this.changeActiveItem,
    });
    this.hiddenSubmenu = new HiddenSubmenu();

    this.languageItem = new ItemList(this.createLanguageItem());
    this.sourceItem = new ItemList(this.createSourceItem());
    this.tagItem = new ItemList(this.createTagItem());
    this.switchHiddenItem = new ItemList(this.createSwitchHiddenItem());

    this.submenu = document.createElement('div');
    this.submenu.className = ('settings__submenu');
    this.currentSubmenu = this.languageSubmenu.render();
    this.languageItem.class += ' settings__item_bold';
    this.submenu.append(this.currentSubmenu);

    window.addEventListener('DOMContentLoaded', this.setActiveItemsOriginally.bind(this));
  }

  setActiveItemsOriginally() {
    this.hiddenSubmenu.setHiddenElementsOriginally();
    this.languageSubmenu.setActiveElementsOriginally();
    this.sourceSubmenu.setActiveElementsOriginally();
  }

  changeActiveItem(activeItem) {
    const classNameActive = 'settings__subitem_active';
    const classNameDisable = 'settings__subitem_disabled';
    document.querySelectorAll(`.${classNameActive}`).forEach(item => item.classList.remove(classNameActive, classNameDisable));

    activeItem.classList.add(classNameActive, classNameDisable);
  }

  clearSubmenu() {
    while (this.submenu.firstChild) {
      this.submenu.removeChild(this.submenu.firstChild);
    }
  }

  changeSubmenu() {
    this.clearSubmenu();
    this.submenu.append(this.currentSubmenu);
  }

  setTextItems(language) {
    const path = language === 'ru' ? ru.translation.settings : eng.translation.settings;
    this.languageItem.item.textContent = path.language;
    this.sourceItem.item.textContent = path.source;
    this.tagItem.item.textContent = path.tag;
    this.switchHiddenItem.item.textContent = path.hidden;
  }

  addClassItemActive(currentItem) {
    document.querySelectorAll('.settings__item')
    .forEach(item => item.classList.remove('settings__item_bold'));
    currentItem.classList.add('settings__item_bold');
  }
  
  createLanguageItem() {
    return {
      class: 'settings__item',
      onClick: () => {
        this.currentSubmenu = this.languageSubmenu.render();
        this.changeSubmenu();
        this.addClassItemActive(this.languageItem.item);
      }
    };
  }

  createSourceItem() {
    return {
      class: 'settings__item',
      onClick: () => {
        this.currentSubmenu = this.sourceSubmenu.render();
        this.changeSubmenu();
        this.addClassItemActive(this.sourceItem.item);
      },
    };
  }

  createTagItem() {
    return {
      class: 'settings__item',
      onClick: () =>{
        this.currentSubmenu = this.tagsSubmenu.render();
        this.changeSubmenu();
        this.addClassItemActive(this.tagItem.item);
      },
    };
  }

  createSwitchHiddenItem() {
    return {
      class: 'settings__item',
      onClick: () => {
        this.currentSubmenu = this.hiddenSubmenu.render();
        this.changeSubmenu();
        this.addClassItemActive(this.switchHiddenItem.item);
      },
    };
  }

  createSettingsList() {
    const list = document.createElement('ul');
    list.className = 'settings__list';

    list.append(
      this.languageItem.render(),
      this.sourceItem.render(),
      this.tagItem.render(),
      this.switchHiddenItem.render()
    );
        
    return list;
  }
};

export default ViewSettings;