class Settings {
  constructor() {
    this.isShow = false;
    this.settingsButton = () => document.querySelector('.settings__button');
    this.settingsMenu = () => document.querySelector('.settings__container');
  }


  show() {
    this.settingsButton().classList.toggle('settings__button_rotate');
    this.settingsMenu().classList.toggle('settings__container_active');
    if (this.isShow) {
      // this.settingsButton().style.transform ="rotate(-90deg)";
      this.isShow = false;
      console.log(222);
    } else {
      // this.settingsButton().style.transform ="rotate(90deg)";
      this.isShow = true;
      console.log(11111);
    }
  }
}

export default Settings;