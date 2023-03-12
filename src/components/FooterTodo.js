// import './header.css';
import Form from './FormTodo';

class FooterTodo {
  constructor(props) {
    this.onClick = props.onClick;
    this.onChange = props.changeMode;
  }

  createForm() {
    const form = new Form({
      onSubmit: this.onClick,
    }).render();

    return form;
  }

  render() {
    const component = document.createElement('header');
    const wrapper = document.createElement('div');
    component.className = 'header';
    wrapper.className = 'wrapper header__wrapper';

    wrapper.append(
      this.createForm(),
    );

    component.append(wrapper);

    return component;
  }
}

export default FooterTodo;