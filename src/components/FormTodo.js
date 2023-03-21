import Button from './Button';
import Input from './Input';

class FormTodo {
  constructor(props) {
    this.onSubmit = props.onSubmit;
    this.clearTodoList = props.clearTodoList;
    this.inputValue = '';
    this.onChange = (e) => this.setInputValue(e.target.value);
    this.input = new Input(this.createInput());
    this.clearInput = () => {
      this.input.inputElement.value = '';
    }
    this.clearButton = new Button(this.createButton()).render();
  }

  setInputValue(value) {
    this.inputValue = value;
  }

  createInput() {
    return {
      label: 'Add',
      type: 'text',
      onChange: this.onChange,
     }
  }

  createButton() {
    return {
      type: 'button',
      className: 'todo__button-clear button',
      onClick: this.clearTodoList,
    };
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
    component.className = 'todo__form';

    component.append(
      this.input.render(),
      this.clearButton,
    );

    
    component.addEventListener('submit', this.handleSubmit.bind(this));
    

    return component;
  }
}

export default FormTodo;