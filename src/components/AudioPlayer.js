import playList from '../data/playList';
import { viewPlayList } from '../View';

class AudioPlayer {
  constructor() {
    viewPlayList();
    this.isPlay = false;
    this.isVolume = true;
    this.playNum = 0;
    this.audio = new Audio();
    this.audio.src = playList[this.playNum].src;
    this.audio.ontimeupdate = this.progressUpdate.bind(this);
    
    this.playAudioButton = () => document.querySelector('.play');
    this.playNextButton = () => document.querySelector('.play-next');
    this.playPrevButton = () => document.querySelector('.play-prev');
    this.playAudioButton().addEventListener('click', this.playAudio.bind(this));
    this.playNextButton().addEventListener('click', this.playNext.bind(this));
    this.playPrevButton().addEventListener('click', this.playPrev.bind(this));
    this.itemsPlay = () => document.querySelectorAll('.item-play');
    this.track = () => document.querySelector('.progress-text');
    this.track().textContent = playList[this.playNum].title;
    this.audioProgress = () => document.querySelector('.audio-progress');
    this.audioDuration = () => document.querySelector('.audio-duration');
    this.audioProgress().onclick = this.audioRewind.bind(this);
    this.currentTimeView = () => document.querySelector('.current-time');
    this.playItems = () => document.querySelectorAll('.play-item');
    this.addListeners();
    this.volumeProgress = () => document.querySelector('.volume-progress');
    this.volumeButton = () => document.querySelector('.volume');
    this.volumeProgress().oninput = this.audioVolume.bind(this);
    this.volumeButton().addEventListener('click', this.toggleVolume.bind(this));
  }

  playAudio() {
    if (!this.isPlay) {
      this.isPlay = true;
      this.audio.loadeddata = this.audio.play();
      this.itemsPlay()[this.playNum].style.backgroundImage = 'url("./assets/svg/pause-small.svg")';
    } else {
      this.isPlay = false;
      this.audio.pause();
      this.itemsPlay()[this.playNum].style.backgroundImage = 'url("./assets/svg/play-smal.svg")';
    }
    this.toggleBtn();
    this.track().textContent = playList[this.playNum].title;
  }

  getAudioLink() {
    this.audio.src = playList[this.playNum].src;
  }

  audioToggle() {
    this.audio.currentTime = 0;
    this.getAudioLink();
    if (!this.isPlay) {
      this.playAudio();
    } else {
      this.isPlay = false;
      this.playAudio();
    }
  }

  toggleBtn() {
    if (!this.isPlay) {
      this.playAudioButton().classList.remove('pause');
    } else {
      this.playAudioButton().classList.add('pause');
    }
  }

  togglePlayIcon() {
    this.itemsPlay()[this.playNum].style.backgroundImage = 'url("./assets/svg/play-smal.svg")';
  }

  playNext() {
    if(this.playNum === 3) {
      this.togglePlayIcon();
      this.playNum = -1;
    } else {
      this.togglePlayIcon();
    }
    this.playNum += 1;
    this.audioToggle();
  }

  playPrev() {
    if(this.playNum === 0) {
      this.togglePlayIcon();
      this.playNum = 4;
    } else {
      this.togglePlayIcon();
    }
    this.playNum -= 1;
    this.audioToggle();
  }

    progressUpdate() {
    const { duration } = this.audio;
    const { currentTime } = this.audio;
    this.audioProgress().value = (100 * currentTime) / duration || 0;
    this.audioDuration().textContent = Math.round(duration) || '00';
    this.currentTimeView().textContent = Math.round(currentTime).toString().padStart(2, '0');
    if (currentTime === duration) {
      this.playNext();
    }
  }

  audioRewind(event) {
    const width = this.audioProgress().offsetWidth;
    const { offsetX } = event;
    this.value = (100 * offsetX) / width;
    this.audio.pause();
    this.audio.currentTime = this.audio.duration * (offsetX / width);
    if(!this.isPlay) {
      this.playAudio();
    } else {
      this.isPlay = false;
      this.playAudio();
    }
  }

  addListeners() {
    this.playItems().forEach((item, index) => {
      item.addEventListener('click', () => {
        this.togglePlayIcon();
        if (this.isPlay) {

          if (index === this.playNum) {
            this.isPlay = false;
            this.audio.pause();
          } else {
            this.playNum = index;
            this.getAudioLink();
            this.isPlay = false;
            this.audio.currentTime = 0;
            this.playAudio();
          }

        } else if (index === this.playNum && !this.Play) {
          this.playAudio();
          this.toggleSmallPause();
        } else {
          this.playNum = index;
          this.getAudioLink();
          this.audio.currentTime = 0;
          this.playAudio();
          this.toggleSmallPause();
        }
      });
    });
  }


  toggleSmallPause() {
    if (!this.isPlay) {
      this.itemsPlay()[this.playNum].style.backgroundImage = 'url("./assets/svg/pause-small.svg")';
    }
  }

  audioVolume(e) {
    this.audio.volume = e.target.value / 100;
  }

  toggleVolume() {
    if (this.isVolume) {
      this.isVolume = false;
      this.audio.volume = 0;
      this.volumeButton().classList.add('mute');
    } else {
      this.isVolume = true;
      this.volumeButton().classList.remove('mute');
      this.audio.volume = 0.5;
    }
  }

}

export default AudioPlayer;




