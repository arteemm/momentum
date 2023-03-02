class ItemList {
  constructor(props) {
    this.label = props.label;
    this.class = props.class;
    this.onClick = props.onClick;
  }

  createItem() {
    const item = document.createElement('li');
    item.className = this.class;
    item.textContent = this.label;

    return item;    
  }

  render() {
    const item = this.createItem();

    if (this.onClick) {
      item.onclick = this.onClick;
    }

    return item;
  }
}

export default ItemList;