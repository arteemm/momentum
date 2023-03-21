import Button from './Button';
import Input from './Input';
import Container from './Container';

class TodoItem {
  constructor(props) {
    this.label = props.label;
    this.deleteItem = props.deleteItem;
    this.id = props.id;
    this.item = document.createElement('div');
    this.setItemDone = props.setItemDone;
    this.isDone = props.isDone;
    this.checkbox = new Input(this.createButtonDoneItem()).render();
  }

  createButtonDeleteItem() {
    const button = new Button({
      label: '',
      type: 'button',
      className: 'todo__button-delete button icon',
      onClick: () => this.deleteItem(this.id),
    }).render();

    return button;
  }

  createButtonDoneItem() {
    return {
      type: 'checkbox',
      className: 'todo__checkbox',
      onChange: () => this.setItemDone(this.id),
    }
  }

  createContainer() {
    return new Container(
      'todo__item-controls',
      this.checkbox,
      this.createButtonDeleteItem(),
    ).render();
  }

  render() {
    this.item.className = 'todo__item';
    this.item.textContent = this.label;

    if (this.isDone) {
      this.item.classList.add('todo__item_done');
      this.checkbox.checked = true;
     }

    this.item.append(
      this.createContainer(),
    );

    return this.item;
  }
}

export default TodoItem;