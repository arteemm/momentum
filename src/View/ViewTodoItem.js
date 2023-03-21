import { TodoItem } from '../components';

class ViewTodoItem {
  constructor(todoListElem) {
    this.todoListElem = todoListElem;
  }

  clearTodoList() {
    while (this.todoListElem.firstChild) {
      this.todoListElem.removeChild(this.todoListElem.firstChild);
    }
  }

  showTodoList(data) {
    this.clearTodoList();
    data.todoArr.forEach((item, index) => {
      const todoItem = new TodoItem({
        label: item.value,
        deleteItem: data.deleteItem,
        id: index,
        setItemDone: data.setItemDone,
        isDone: item.isDone,
      }).render();

      this.todoListElem.append(todoItem);
    });
  }
}

export default ViewTodoItem;