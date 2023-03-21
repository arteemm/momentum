import ItemList from './ItemList';

class SourceSubmenu {
  constructor(props) {
    this.changeGitSource = props.changeToGit;
    this.getUnsplashSource = props.changeToUnsplash;
    this.setUnsplashSource = props.setToUnsplash;
    this.getFlickrSourse = props.changeToFlickr;
    this.setFlickrSourse = props.setToFlickr;
    this.tagSubmenuInput = props.tagSubmenuInput;
    this.changeActiveItem = props.changeActiveItem;

    this.switchGitItem = new ItemList(this.createSwitchGitItem()).render();
    this.switchUnsplashItem = new ItemList(this.createSwitchUnsplashItem()).render();
    this.switchFlickrItem = new ItemList(this.createSwitchFlickrItem()).render();
  }

  setActiveElementsOriginally() {
    const currentSource = JSON.parse(localStorage.getItem('settings'))?.source || 'git';
    const classNameActive = 'settings__subitem_active';
    const classNameDisable = 'settings__subitem_disabled';
    switch (currentSource) {
      case 'git':
        this.switchGitItem.classList.add(classNameActive, classNameDisable);
      break;
      case 'unsplash':
        this.switchUnsplashItem.classList.add(classNameActive, classNameDisable);
      break;
      case 'flickr':
        this.switchFlickrItem.classList.add(classNameActive, classNameDisable);
      break;
      default: break;
    }
  }

  createSwitchGitItem() {
    return {
      label: 'github',
      class: 'settings__subitem',
      onClick: () => {
        this.changeGitSource();
        this.tagSubmenuInput.disabled = true;
        this.changeActiveItem(this.switchGitItem);
      },
    };
  }

  async changeUnsplashSource() {
    await this.getUnsplashSource();
    await this.setUnsplashSource();
    this.tagSubmenuInput.disabled = false;
  }

  createSwitchUnsplashItem() {
    return {
      label: 'Unsplash',
      class: 'settings__subitem',
      onClick: () => {
        this.changeUnsplashSource();
        this.changeActiveItem(this.switchUnsplashItem);
      }
    };
  }

  async changeFlickrSource() {
    await this.getFlickrSourse();
    await this.setFlickrSourse();
    this.tagSubmenuInput.disabled = false;
  }

  createSwitchFlickrItem() {
    return {
      label: 'Flickr',
      class: 'settings__subitem',
      onClick: () => {
        this.changeFlickrSource();
        this.changeActiveItem(this.switchFlickrItem);
      }
    };
  }

  render() {
    const container = document.createElement('ul');
    container.className = 'settings__subList';

    container.append(
      this.switchGitItem,
      this.switchUnsplashItem,
      this.switchFlickrItem,
    );

    return container;
  }
}

export default SourceSubmenu;