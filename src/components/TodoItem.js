import Button from './Button';
import Input from './Input'

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
      label: 'x',
      type: 'button',
      onClick: () => this.deleteItem(this.id),
    }).render();
    button.classList.add('close', 'control');

    return button;
  }

  createButtonDoneItem() {
    return {
      type: 'checkbox',
      className: 'todo__checkbox',
      onChange: () => this.setItemDone(this.id),
    }
  }

  render() {
    this.item.className = 'todo__item';
    this.item.textContent = this.label;

    if (this.isDone) {
      this.item.classList.add('todo__item_done');
      this.checkbox.checked = true;
     }

    this.item.append(
      this.checkbox,
      this.createButtonDeleteItem(),
    );

    return this.item;
  }
}

export default TodoItem;