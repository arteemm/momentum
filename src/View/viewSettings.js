import { ItemList, LanguageSubmenu, SourceSubmenu, TagsSubmenu, HiddenSubmenu } from '../components';
import { ru, eng } from '../locales';

class ViewSettings {
  constructor(props) {
    this.languageSubmenu = new LanguageSubmenu(props);
    this.tagsSubmenu = new TagsSubmenu(props);
    this.sourceSubmenu = new SourceSubmenu({
      ...props,
      tagSubmenuInput: this.tagsSubmenu.input,
    });
    this.hiddenSubmenu = new HiddenSubmenu();
  
    this.submenu = document.createElement('div');
    this.submenu.className = ('settings__submenu');
    this.currentSubmenu = this.languageSubmenu.render();

    this.submenu.append(this.currentSubmenu);
    
    this.languageItem = new ItemList(this.createLanguageItem());
    this.sourceItem = new ItemList(this.createSourceItem());
    this.tagItem = new ItemList(this.createTagItem());
    this.switchHiddenItem = new ItemList(this.createSwitchHiddenItem());
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
  
  createLanguageItem() {
    return {
      class: 'settings__item',
      onClick: () => {
        this.currentSubmenu = this.languageSubmenu.render();
        this.changeSubmenu();
      }
    };
  }

  createSourceItem() {
    return {
      class: 'settings__item',
      onClick: () => {
        this.currentSubmenu = this.sourceSubmenu.render();
        this.changeSubmenu();
      },
    };
  }

  createTagItem() {
    return {
      class: 'settings__item',
      onClick: () =>{
        this.currentSubmenu = this.tagsSubmenu.render();
        this.changeSubmenu();
      },
    };
  }

  createSwitchHiddenItem() {
    return {
      class: 'settings__item',
      onClick: () => {
        this.currentSubmenu = this.hiddenSubmenu.render();
        this.changeSubmenu();
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