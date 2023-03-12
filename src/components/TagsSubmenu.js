import { ru, eng } from '../locales';
import Input from './Input';

class TagsSubmenu {
  constructor(props) {
    this.currentSource = props.currentSource;
    this.input = new Input(this.createInputItem());
    this.errorMessage = document.createElement('p');
    this.label = document.createElement('label');
  }

  setTextItems(language) {
    const path = language === 'ru' ? ru.translation.submenu : eng.translation.submenu;
    this.label.textContent = path.tagDescription;
    this.errorMessage = path.errorMessage;
  }

  createDescription() {
    this.label.htmlFor = 'search';
    this.label.className = 'search-bar__label';

    return this.label;
  }

  createMessageError() {
    this.errorMessage = document.createElement('p');
    const text = this.language === 'ru' ?
      ru.translation.submenu.errorMessage :
      eng.translation.submenu.errorMessage;

    this.errorMessage.textContent = text;
    this.errorMessage.className = 'search-bar__message hidden';
    return this.errorMessage
  }

  createInputItem() {
    return {
      type: 'text',
      onChange: this.handleChange.bind(this),
      className: 'search-bar__input',
      id: 'search',
      value: '',
      disabled: true,
    };
  }

  checkResponse(invalid = false) {
    if (invalid) {
      this.errorMessage.classList.remove('hidden');
      this.input.inputElement.classList.add('search-bar__input_invalid');
    } else {
      this.errorMessage.classList.add('hidden');
      this.input.inputElement.classList.remove('search-bar__input_invalid');
    }
  }

  handleChange(e) {
    this.currentSource(e.target.value);
  }

  render() {
    const container = document.createElement('div');
    container.onsubmit = this.handleSubmit;

    container.append(
      this.createDescription(),
      this.input.render(),
      this.createMessageError(),
    );

    return container;
  }
}

export default TagsSubmenu;