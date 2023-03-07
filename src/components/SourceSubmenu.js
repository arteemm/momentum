import ItemList from './ItemList';

class SourceSubmenu {
  constructor(props) {
    this.changeGitSource = props.changeToGit;
    this.getUnsplashSource = props.changeToUnsplash;
    this.setUnsplashSource = props.setToUnsplash;
    this.getFlickrSourse = props.changeToFlickr;
    this.setFlickrSourse = props.setToFlickr;
    this.changeInputDisabled = props.changeInputDisabled;
  }

  createSwitchGitItem() {
    const item = new ItemList({
      label: 'github',
      class: 'settings__subitem',
      onClick: () => {
        this.changeGitSource();
        this.changeInputDisabled(true);
      },
    }).render();

    return item;
  }

  async changeUnsplashSource() {
    await this.getUnsplashSource();
    await this.setUnsplashSource();
    this.changeInputDisabled(false);
  }

  createSwitchUnsplashItem() {
    const item = new ItemList({
      label: 'Unsplash',
      class: 'settings__subitem',
      onClick: () => {
        this.changeUnsplashSource();
      }
    }).render();

    return item;
  }

  async changeFlickrSource() {
    await this.getFlickrSourse();
    await this.setFlickrSourse();
    this.changeInputDisabled(false);
  }

  createSwitchFlickrItem() {
    const item = new ItemList({
      label: 'Flickr',
      class: 'settings__subitem',
      onClick: () => {
        this.changeFlickrSource();
      }
    }).render();

    return item;
  }

  render() {
    const container = document.createElement('ul');

    container.append(
      this.createSwitchGitItem(),
      this.createSwitchUnsplashItem(),
      this.createSwitchFlickrItem()
    );

    return container;
  }
}

export default SourceSubmenu;