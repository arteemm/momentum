// import './form.css';
import Button from './Button';
import Input from './Input';

class Form {
  constructor(props) {
    this.onSubmit = props.onSubmit;
    this.inputValue = '';
    this.onChange = (e) => this.setInputValue(e.target.value);
    this.clearInput = null;
  }

  setInputValue(value) {
    this.inputValue = value;
  }

  createInput() {
    const input = new Input({
      label: 'Add',
      type: 'text',
      onChange: this.onChange,
     }).render();

     this.clearInput = () => { input.value = ''; };

    return input;
  }

  createButton() {
    const button = new Button({
      label: 'Add',
      type: 'submit',
    }).render();
    button.classList.add('control');
    
    return button;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.inputValue) {
      this.onSubmit(this.inputValue);
      this.clearInput();
      this.inputValue = '';
    }
  }

  createLabel() {
    const label = document.createElement('label');
    label.className = 'form__label';
    label.textContent = 'Add new tag';

    label.append(
      this.createInput(),
    );

    return label;
  }

  render() {
    const component = document.createElement('form');
    component.className = 'header__form form';

    component.append(
      this.createLabel(),
      this.createButton(),
    );

    
    component.addEventListener('submit', this.handleSubmit.bind(this));
    

    return component;
  }
}

export default Form;