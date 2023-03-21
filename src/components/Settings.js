import { ViewSettings } from '../View';
import Button from './Button';

class Settings {
  constructor(props) {
    this.viewSettings = new ViewSettings(props);

    this.settingsButton = new Button({
      label: '',
      type: 'button',
      className: 'settings__button icon button',
      onClick: () => this.showSettings(),
    }).render();
    this.settingsContainer = document.createElement('div');
  }

  showSettings() {
    this.settingsButton.classList.toggle('settings__button_rotate');
    this.settingsContainer.classList.toggle('settings__container_active');
  }

  createSettingsContainer() {
    this.settingsContainer.className = 'settings__container';

    this.settingsContainer.append(
      this.viewSettings.createSettingsList(),
      this.viewSettings.submenu,
    );

    return this.settingsContainer;
  }

  render() {
    const settings = document.createElement('div');
    settings.className = 'footer__settings settings';

    settings.append(
      this.settingsButton,
      this.createSettingsContainer(),
    );

    return settings;
  }
}

export default Settings;