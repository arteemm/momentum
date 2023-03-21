class ItemList {
  constructor(props) {
    this.label = props.label;
    this.class = props.class;
    this.onClick = props.onClick;
    this.item = document.createElement('li');
  }

  createItem() {
    this.item.className = this.class;
    this.item.textContent = this.label || '';

    return this.item;    
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