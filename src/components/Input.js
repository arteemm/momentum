class Input {
  constructor(props) {
    this.type = props.type;
    this.onChange = props.onChange;
    this.className = props.className;
    this.id = props.id;
    this.value = props.value;
    this.disabled = props.disabled;
    this.inputElement = document.createElement('input');
  }

  render() {
    this.inputElement.type = this.type || 'text';
    this.inputElement.className = this.className;
    this.inputElement.id = this.id || '';
    this.inputElement.value = this.value || '';
    this.inputElement.disabled = this.disabled || false;
    
    if (this.onChange) {
      this.inputElement.addEventListener('change', this.onChange.bind(this));
    }
    
    return this.inputElement;
  }
}

export default Input;