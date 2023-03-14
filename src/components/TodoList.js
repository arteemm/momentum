import FooterTodo from './FooterTodo';
import { ViewTodoItem } from '../View';
import Button from './Button';

class TodoList {
  constructor() {
    this.todoContainer = document.createElement('div');
    this.todoListElem = document.createElement('div');
    this.todoListElem.className = 'todo__list';
    this.openTodoButton = new Button(this.createOpenTodoButton()).render();
    this.todoArr = this.getLocalStorage() || [];
    this.viewTodoItem = new ViewTodoItem(this.todoListElem);
  }

  createFooter() {
    const footer = new FooterTodo({
      onClick: this.handleClick.bind(this),
    }).render();

    return footer;
  }

  deleteItem(id) {
    this.todoArr.splice(id, 1);
    this.showTodoList();
  }

  setItemDone(id) {
    this.todoArr[id].isDone = !this.todoArr[id].isDone;
    this.showTodoList();
  }

  getLocalStorage() {
    return JSON.parse(localStorage.getItem('todoList'));
  }

  clearTodoList() {
    this.todoArr.length = 0;
    this.viewTodoItem.clearTodoList();
    localStorage.removeItem('todoList');
  }

  showTodoList() {
    this.viewTodoItem.showTodoList({
      todoArr: this.todoArr,
      deleteItem: this.deleteItem.bind(this),
      setItemDone: this.setItemDone.bind(this),
    });
  }

  handleClick(value) {
    this.todoArr.push({ value, isDone: false });
    this.showTodoList();
  }

  createTodoContainer() {
    this.todoContainer.className = 'todo__container';

    this.todoContainer.append(
      this.todoListElem,
      this.createFooter(),
    );

    return this.todoContainer
  }

  showTodo() {
    this.todoContainer.classList.toggle('todo__container_active');
    this.openTodoButton.classList.toggle('todo__button_active');
  }

  createOpenTodoButton(){
    return {
      label: 'Todo',
      type: 'button',
      className: 'todo__button button',
      onClick: this.showTodo.bind(this),
    }
  }

  render() {
    const container = document.createElement('div');
    container.className = 'todo';
  
    container.append(
      this.openTodoButton,
      this.createTodoContainer(),
    );

    return container;
  }
}

export default TodoList;