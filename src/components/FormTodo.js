import Button from './Button';
import Input from './Input';

class FormTodo {
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
      placeholder: 'Add new task',
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

  render() {
    const component = document.createElement('form');
    component.className = 'header__form form';

    component.append(
      this.createInput(),
      this.createButton(),
    );

    
    component.addEventListener('submit', this.handleSubmit.bind(this));
    

    return component;
  }
}

export default FormTodo;