import FormTodo from './FormTodo';

class FooterTodo {
  constructor(props) {
    this.onClick = props.onClick;
    this.form = new FormTodo(props);
  }

  render() {
    const component = document.createElement('footer');
    component.className = 'todo__footer';

    component.append(
      this.form.render(),
    );

    return component;
  }
}

export default FooterTodo;