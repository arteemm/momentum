import FormTodo from './FormTodo';

class FooterTodo {
  constructor(props) {
    this.onClick = props.onClick;
  }

  createForm() {
    const form = new FormTodo({
      onSubmit: this.onClick,
    }).render();

    return form;
  }

  render() {
    const component = document.createElement('footer');
    component.className = 'todo__footer';

    component.append(
      this.createForm(),
    );

    return component;
  }
}

export default FooterTodo;