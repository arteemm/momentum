import { getImage, getFlickrImage } from '../api';

class Background {
  constructor (props) {
    this.data = {};
    this.timeOfDay = props.timeOfDay;
    this.randomNum = 0;
    this.currentSource = this.getImageLocal;
    this.checkResponse = props.checkResponse
  }

  async getCurrentSource(val) {
    if (this.currentSource === this.setImageUnsplash) {
      await this.getImageUnsplash(val);
    } else if (this.currentSource === this.setImageFlickr) {
      await this.getImageFlickr(val);
    }
    await this.currentSource();
  }

  setTimeOfDay(val) {
    this.timeOfDay = val;
  }

  async getImageUnsplash(val = this.timeOfDay) {
    this.currentSource = this.setImageUnsplash;
  
    try {
      const data = await getImage(val);
      if (data.errors) {
        this.checkResponse()(true);
        return;
      }
      this.data = data;
      this.checkResponse()(false);
    } catch(err) {
      console.error(err);
    }    
  }

  async setImageUnsplash() {
    const img = new Image();
    try {
      img.src = `${this.data[this.randomNum].urls.regular}`;
      img.onload = () => {
        document.body.style.backgroundImage = `url('${this.data[this.randomNum].urls.regular}')`;
      };
    } catch (err) {
      console.error(err);
    }
  }

  async getImageFlickr(val = this.timeOfDay) {
    this.currentSource = this.setImageFlickr;

    try {
      const data = await getFlickrImage(val);
      if (!data.photos.photo.length) {
        this.checkResponse()(true);
        return;
      }
      this.data = data;
      this.checkResponse()(false);
    } catch(err) {
      console.error(err);
    }
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
 
  async getImageLocal () {
    this.currentSource = this.getImageLocal;
    const img = new Image();
    img.src = `${this.getUrl()}`;
    img.onload = () => {
      document.body.style.backgroundImage = `url('${this.getUrl()}')`;
    };
  }

  getSlideNext() {
    if (this.randomNum === 20) {
      this.randomNum = 0;
    }
    this.randomNum++;
    this.currentSource();
  }

  getSlidePrev() {
    if (this.randomNum === 1) {
      this.randomNum = 21;
    }
    this.randomNum--;
    this.currentSource();
  }

  render () {
    this.getRandomNum();
    this.currentSource();
  }
}

export default Background;