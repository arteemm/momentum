class TagsSubmenu {
  constructor(props) {
    this.currentSource = props.currentSource;
  }

  createInputItem() {
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'search-bar__input';
    input.value = '';

    input.onchange = this.handleChange.bind(this);

    return input;
  }

  handleChange(e) {
    this.currentSource(e.target.value);
  }

  render() {
    const container = document.createElement('div');
    container.onsubmit = this.handleSubmit;

    container.append(
      this.createInputItem(),
    );

    return container;
  }
}

export default TagsSubmenu;