import { Tag } from '../components';

class ViewTags {
  constructor(tagListElem) {
    this.tagListElem = tagListElem;
  }

  clearTags() {
    while (this.tagListElem.firstChild) {
      this.tagListElem.removeChild(this.tagListElem.firstChild);
    }
  }

  showTags(data) {
    this.clearTags();
    data.tagsArr.forEach((item, index) => {
      const tag = new Tag({
        label: item,
        onClick: data.onClick,
        id: index,
      }).render();

      this.tagListElem.append(tag);
    });
  }
}

export default ViewTags;