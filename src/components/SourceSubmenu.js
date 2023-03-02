import ItemList from './ItemList';

class SourceSubmenu {
  constructor(props) {
    this.currentSource = 'git';
    this.changeGitSource = props.changeToGit;
    this.getUnsplashSource = props.changeToUnsplash;
    this.setUnsplashSource = props.setToUnsplash;
    this.getFlickrSourse = props.changeToFlickr;
    this.setFlickrSourse = props.setToFlickr;
  }

  // changeGitSource() {
  //   this.currentSource = 'git';
  //   console.log(this.currentSource);
  // }

  createSwitchGitItem() {
    const item = new ItemList({
      label: 'github',
      class: 'settings__subitem',
      onClick: this.changeGitSource,
    }).render();

    return item;
  }

  async changeUnsplashSource() {
    await this.getUnsplashSource();
    await this.setUnsplashSource();
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