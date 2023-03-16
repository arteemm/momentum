class Input {
  constructor(props) {
    this.type = props.type;
    this.onChange = props.onChange;
    this.onInput = props.onInput;
    this.className = props.className;
    this.id = props.id;
    this.value = props.value;
    this.disabled = props.disabled;
    this.placeholder = props.placeholder;
    this.max = props.max;
    this.min = props.min;
    this.step = props.step;
    this.inputElement = document.createElement('input');
  }

  render() {
    this.inputElement.type = this.type || 'text';
    this.inputElement.className = this.className;
    this.inputElement.id = this.id || '';
    this.inputElement.value = this.value || '';
    this.inputElement.disabled = this.disabled || false;
    this.inputElement.placeholder = this.placeholder || '';
    this.inputElement.max = this.max || '';
    this.inputElement.min = this.min || '';
    this.inputElement.step = this.step || '';
    
    if (this.onChange) {
      this.inputElement.addEventListener('change', this.onChange.bind(this));
    }
    
    if (this.onInput) {
      this.inputElement.addEventListener('input', this.onInput.bind(this));
    }

    return this.inputElement;
  }
}

export default Input;