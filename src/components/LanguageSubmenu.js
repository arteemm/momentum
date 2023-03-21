import ItemList from './ItemList';

class LanguageSubmenu {
  constructor(props) {
    this.language = JSON.parse(localStorage.getItem('settings'))?.language || 'ru';
    this.changeLanguageApp = props.changeLanguage;
    this.changeActiveItem = props.changeActiveItem;

    this.switchRussianItem = new ItemList(this.createSwitchRussianItem()).render();
    this.switchEnglishItem = new ItemList(this.createSwitchEnglishItem()).render();
  }

  setActiveElementsOriginally() {
    const classNameActive = 'settings__subitem_active';
    const classNameDisable = 'settings__subitem_disabled';
    switch (this.language) {
      case 'ru':
        this.switchRussianItem.classList.add(classNameActive, classNameDisable);
      break;
      case 'en':
        this.switchEnglishItem.classList.add(classNameActive, classNameDisable);
      break;
      default: break;
    }
  }

  createSwitchRussianItem() {
    return {
      label: 'русский(RU)',
      class: 'settings__subitem',
      onClick: () => {
        if (this.language === 'ru') return;
        this.language = 'ru'
        this.changeLanguageApp('ru');
        this.changeActiveItem(this.switchRussianItem);
      },
    };
  }

  createSwitchEnglishItem() {
    return {
      label: 'English(ENG)',
      class: 'settings__subitem',
      onClick: () => {
        if (this.language === 'en') return;
        this.language = 'en'
        this.changeLanguageApp('en');
        this.changeActiveItem(this.switchEnglishItem);
      },
    }
  }

  render() {
    const container = document.createElement('ul');
    container.className = 'settings__subList';

    container.append(this.switchRussianItem , this.switchEnglishItem);

    return container;
  }
}

export default LanguageSubmenu;