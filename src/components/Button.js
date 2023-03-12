class Button {
  constructor(props) {
    this.label = props.label;
    this.type = props.type;
    this.className = props.className;
    this.onClick = props.onClick;
  }

  render() {
    const component = document.createElement('button');
    component.textContent = this.label;
    component.type = this.type;
    component.className = this.className;
    
    if (this.onClick) {
      component.addEventListener('click', this.onClick.bind(this));
    }

    return component;
  }
}

export default Button;