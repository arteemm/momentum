import { getImage, getFlickrImage } from '../api';

class Background {
  constructor (timeOfDay) {
    this.data = {};
    this.timeOfDay = timeOfDay;
    this.slideNext = () => document.querySelector('.slide-next');
    this.slidePrev = () => document.querySelector('.slide-prev');
    this.randomNum = 0;
    this.currentSource = this.getImageLocal;
  }

  setTimeOfDay(val) {
    this.timeOfDay = val;
  }

  async getImageUnsplash() {
    this.currentSource = this.setImageUnsplash;
    this.data = await getImage(this.timeOfDay);
  }

  async setImageUnsplash() {
    const img = new Image();
    img.src = `${this.data[this.randomNum].urls.regular}`;
    img.onload = () => {
      document.body.style.backgroundImage = `url('${this.data[this.randomNum].urls.regular}')`;
    };
  }

  async getImageFlickr() {
    this.currentSource = this.setImageFlickr;
    this.data = await getFlickrImage(this.timeOfDay);
  }

  async setImageFlickr() {
    const img = new Image();
    try {
      img.src = `${this.data.photos.photo[this.randomNum].url_l}`;
      img.onload = () => {
        document.body.style.backgroundImage = `url('${this.data.photos.photo[this.randomNum].url_l}')`;
      };
    } catch (err) {
      console.error(err);
    }
  }

  getRandomNum () {
    this.randomNum = Math.ceil(Math.random() * 20);
  }

  getUrl () {
    const bgNum = this.randomNum.toString().padStart(2, '0');
    return `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${this.timeOfDay}/${bgNum}.jpg`;
  }

  addListener () {
    this.slidePrev().addEventListener('click', this.getLocalSlidePrev.bind(this));
    this.slideNext().addEventListener('click', this.getLocalSlideNext.bind(this));    
  }
 
  async getImageLocal () {
    this.currentSource = this.getImageLocal;
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
    this.currentSource();
  }

  getLocalSlidePrev() {
    if (this.randomNum === 1) {
      this.randomNum = 21;
    }
    this.randomNum--;
    this.currentSource();
  }

  render () {
    this.addListener();
    this.getRandomNum();
    this.currentSource();
  }
}

export default Background;