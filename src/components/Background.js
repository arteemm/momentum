import { getImage } from '../api';

class Background {
  constructor (timeOfDay) {
    this.data = {};
    this.timeOfDay = timeOfDay;
    this.slideNext = () => document.querySelector('.slide-next');
    this.slidePrev = () => document.querySelector('.slide-prev');
    this.addListener = () => this.getImageUnsplash();
    this.addListenerLocalPrev = () => this.getLocalSlidePrev();
    this.addListenerLocalNext = () => this.getLocalSlideNext();
    this.randomNum = 0;
  }

  async getImageUnsplash () {
    this.data = await getImage(this.timeOfDay);
    const img = new Image();
    img.src = `${this.data.urls.regular}`;
    img.onload = () => {
      document.body.style.backgroundImage = `url('${this.data.urls.regular}')`;
    };
    this.slidePrev().addEventListener('click', this.addListener);
    this.slideNext().addEventListener('click', this.addListener);
  }

  getRandomNum () {
    this.randomNum = Math.ceil(Math.random() * 20);
  }

  getUrl () {
    const bgNum = this.randomNum.toString().padStart(2, '0');
    return `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${this.timeOfDay}/${bgNum}.jpg`
  }

  changeListener () {
    this.slidePrev().removeEventListener('click', this.addListener);
    this.slideNext().removeEventListener('click', this.addListener);
    this.slidePrev().addEventListener('click', this.addListenerLocalPrev);
    this.slideNext().addEventListener('click', this.addListenerLocalNext);    
  }
 
  async getImageLocal () {
    const img = new Image();
    img.src = `${this.getUrl()}`;
    img.onload = () => {
      document.body.style.backgroundImage = `url('${this.getUrl()}')`;
    };
  }

  getLocalSlideNext() {
    if (this.randomNum === 20) {
      this.randomNum = 0;
    }
    this.randomNum++;
    this.getImageLocal();
  }

  getLocalSlidePrev() {
    if (this.randomNum === 1) {
      this.randomNum = 21;
    }
    this.randomNum--;
    this.getImageLocal();
  }

  render () {
    this.changeListener();
    this.getRandomNum();
    this.getImageLocal();
  }
}

export default Background;