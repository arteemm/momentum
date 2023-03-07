import { ru, eng } from '../locales';

class TagsSubmenu {
  constructor(props) {
    this.language = 'ru';
    this.currentSource = props.currentSource;
    this.inputDisabled = true;
    this.input = document.createElement('input');
    this.errorMessage = document.createElement('p');
  }

  createDescription() {
    const element = document.createElement('label');
    const text = this.language === 'ru' ?
      ru.translation.submenu.tagDescription :
      eng.translation.submenu.tagDescription;
    element.htmlFor = 'search';
    element.className = 'search-bar__label';
    element.textContent = text;

    return element;
  }

  createMessageError() {
    this.errorMessage = document.createElement('p');
    const text = this.language === 'ru' ?
      ru.translation.submenu.errorMessage :
      eng.translation.submenu.errorMessage;

    this.errorMessage.textContent = text;
    this.errorMessage.className = 'search-bar__message hidden';
  }

  createInputItem() {
    this.input.type = 'text';
    this.input.id = 'search';
    this.input.className = 'search-bar__input';
    this.input.value = '';
    this.input.disabled = this.inputDisabled;

    this.input.onchange = this.handleChange.bind(this);
  }

  checkResponse(invalid = false) {
    if (invalid) {
      this.input.classList.add('search-bar__input_invalid');
      this.errorMessage.classList.remove('hidden');
    } else {
      this.input.classList.remove('search-bar__input_invalid');
      this.errorMessage.classList.add('hidden');
    }
  }

  handleChange(e) {
    this.currentSource(e.target.value);
  }

  render(language, disabled) {
    this.language = language;
    this.inputDisabled = disabled;
    this.createInputItem();
    this.createMessageError();

    const container = document.createElement('div');
    container.onsubmit = this.handleSubmit;

    container.append(
      this.createDescription(),
      this.input,
      this.errorMessage,
    );

    return container;
  }
}

export default TagsSubmenu;