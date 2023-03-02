import ItemList from './ItemList';

class TagsSubmenu {
  constructor(props) {
    this.currentSource = props.currentSource;
    this.setTimeOfDay= props.setTimeOfday;
  }

  createMorningItem() {
    const item = new ItemList({
      label: 'Morning',
      class: 'settings__subitem',
      onClick: () => {
        this.setTimeOfDay('morning');
        this.currentSource();
      }
    }).render();

    return item;
  }

  createAfternoonItem() {
    const item = new ItemList({
      label: 'Afternoon',
      class: 'settings__subitem',
      onClick: () => {
        this.setTimeOfDay('afternoon');
        this.currentSource();
      }
    }).render();

    return item;
  }

  createEveningItem() {
    const item = new ItemList({
      label: 'Evening',
      class: 'settings__subitem',
      onClick: () => {
        this.setTimeOfDay('evening');
        this.currentSource();
      }
    }).render();

    return item;
  }

  createNightItem() {
    const item = new ItemList({
      label: 'Night',
      class: 'settings__subitem',
      onClick: () => {
        this.setTimeOfDay('night');
        this.currentSource();
      }
    }).render();

    return item;
  }


  render() {
    const container = document.createElement('ul');

    container.append(
      this.createMorningItem(),
      this.createAfternoonItem(),
      this.createEveningItem(),
      this.createNightItem(),
    );

    return container;
  }
}

export default TagsSubmenu;