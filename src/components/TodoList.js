import FooterTodo from './FooterTodo';
import { ViewTags } from '../View';

class App {
  constructor() {
    this.tagArr = this.getLocalStorage() || [];
    this.tagListElem = document.createElement('div');
    this.tagListElem.className = 'tags__list';
    this.viewTags = new ViewTags(this.tagListElem);
    this.isReadOnlyMode = false;
  }

  get tagList() {
    return this.tagArr;
  }

  changeMode(e) {
    this.isReadOnlyMode = (e.target.checked);
    document.querySelectorAll('.control').forEach(item => {
      const button = item;
      button.disabled = this.isReadOnlyMode;
    });
  }

  createFooter() {
    const footer = new FooterTodo({
      onClick: this.handleClick.bind(this),
      changeMode: this.changeMode,
    }).render();

    return footer;
  }

  deleteTag(id) {
    this.tagList.splice(id, 1);
    this.showTags();
  }

  setLocalStorage() {
    const tagList = JSON.stringify(this.tagList);
    localStorage.setItem('tagList', tagList);
  }

  getLocalStorage() {
    return JSON.parse(localStorage.getItem('tagList'));
  }

  clearTagList() {
    this.tagList.length = 0;
    this.viewTags.clearTags();
    localStorage.removeItem('tagList');
  }

  showTags() {
    this.viewTags.showTags({
      tagsArr: this.tagList,
      onClick: this.deleteTag.bind(this),
    });
  }

  handleClick(value) {
    this.tagList.push(value);
    this.showTags();
  }

  render() {
    const main = document.getElementById('root');
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';

    wrapper.append(
      this.tagListElem,
    );

    main.append(
      wrapper,
      this.createFooter(),
    );
    
    return main;
  }
}

export default App;