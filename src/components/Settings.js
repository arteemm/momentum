import { ViewSettings } from '../View';

class Settings {
  constructor(props) {
    this.settingsButton = () => document.querySelector('.settings__button');
    this.settingsContainer = () => document.querySelector('.settings__container');
    this.settingsMenu = () => document.querySelector('.settings__menu');
    this.subMenuArr = () => document.querySelectorAll('.settings__submenu');
    this.settingsContainer().addEventListener('click', this.eventTarget.bind(this));
    document.body.addEventListener('click', this.closeAllWindows);

    this.viewSettings = new ViewSettings(props);
    this.settingsMenu().append(this.viewSettings.render());
  }

  eventTarget(e) {
    const elem = e.target;
  
    if (elem.classList.contains('settings__item-name')) {
      this.showSubMenu(elem);
    }
  }

  showSubMenu(elem) {
    this.closeAllMenu(elem);
    elem.nextElementSibling.classList.toggle('settings__submenu_active');
  }

  closeAllMenu(current) {
    this.subMenuArr().forEach(item => {
        if (item.previousElementSibling !== current) {
          item.classList.remove('settings__submenu_active');
        }
      });
  }

  show() {
    this.settingsButton().classList.toggle('settings__button_rotate');
    this.settingsContainer().classList.toggle('settings__container_active');
  }

  closeAllWindows() {
    // this.closeAllMenu();
    // this.settingsButton().classList.remove('settings__button_rotate');
    // this.settingsMenu().classList.remove('settings__container_active');
  }
}

export default Settings;