import Settings from './Settings';
import Quote from './Quote';
import TodoList from './TodoList';

class Footer {
  constructor(props) {
    this.quote = new Quote();
    this.settings = new Settings(props);
    this.todoList = new TodoList();
  }

  render() {
    const footer = document.createElement('footer');
    footer.className = 'footer';

    footer.append(
      this.settings.render(),
      this.quote.render(),
      this.todoList.render(),
    );

    return footer;
  }
}

export default Footer;