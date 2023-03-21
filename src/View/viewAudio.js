import playList from '../data/playList';
import { Button, Container, Input } from '../components';

class ViewAudioPlayer {
  constructor(props) {
    this.playPrev = props.playPrev;
    this.playNext = props.playNext;
    this.playAudio = props.playAudio;
    this.changeVolume = props.changeVolume;
    this.toggleVolume = props.toggleVolume;
    this.setAudioLink = props.setAudioLink;
    this.setPlayNum = props.setPlayNum;
    this.getPlayNum = props.getPlayNum;
    this.setIsPlay = props.setIsPlay;

    this.prevButton = new Button(this.createPrevButton()).render();
    this.playButton = new Button(this.createPlayButton()).render();
    this.nextButton = new Button(this.createNextButton()).render();
    this.volume =  new Button(this.createVolumeButton()).render();
    this.volumeProgress = new Input(this.createVolumeRange()).render();

    this.currentTime = document.createElement('span');
    this.audioDuration = document.createElement('span');
    this.progressText = document.createElement('p');
    this.audioProgress = document.createElement('progress');
  }

  createPrevButton() {
    return {
      label: '',
      type: 'button',
      className: 'player__button-prev button icon player-icon',
      onClick: this.playPrev,
    }
  }

  createPlayButton() {
    return {
      label: '',
      type: 'button',
      className: 'player__button-play button icon player-icon',
      onClick: this.playAudio,
    }
  }

  createNextButton() {
    return {
      label: '',
      type: 'button',
      className: 'player__button-next button icon player-icon',
      onClick: this.playNext,
    }
  }

  createControlsContainer() {
    return new Container(
      'player__controls',
      this.prevButton,
      this.playButton,
      this.nextButton,
    ).render();
  }

  createPlayerTimeContainer() {
    this.currentTime.textContent = '00:00';
    this.audioDuration.textContent = '00:00';
    const slash = document.createElement('span');
    slash.textContent = '/';

     return new Container(
      'player__duration-container',
      this.currentTime,
      slash,
      this.audioDuration,
    ).render();
  }

  createPlayerProgressContainer() {
    this.audioProgress.className = 'player__audio-progress';
    this.audioProgress.max = '100';
    this.audioProgress.value = '0';

    return new Container(
      'player__progress',
      this.progressText,
      this.audioProgress,
    ).render();
  }

  createVolumeContainer() {
    return new Container(
      'player__volume-container',
      this.volume,
      this.volumeProgress,
    ).render();
  }

  createVolumeRange() {
    return {
      className: 'player__volume-progress',
      type: 'range',
      max: '100',
      min: '0',
      step: '1',
      value: '50',
      onInput: this.changeVolume,
    }
  }

  createVolumeButton() {
    return {
      label: '',
      type: 'button',
      className: 'player__button-volume button icon',
      onClick: this.toggleVolume,
    }
  }

  createPlayerContainer() {
    return new Container(
      'player__container',
      this.createPlayerTimeContainer(),
      this.createPlayerProgressContainer(),
      this.createVolumeContainer(),
    ).render();
  }

  createPlayListContainer() {
    const playListContainer = document.createElement('ul');
    playListContainer.className = 'player__list';

    playList.forEach((item, index) => {
          const li = document.createElement('li');
          const span = document.createElement('span');
          li.classList.add('player__item');
          span.classList.add('player__item-icon', 'icon');
          li.textContent = playList[index].title;

          li.addEventListener('click', () => {

            if(this.getPlayNum() !== index) {
              this.setPlayNum(index);
              this.setAudioLink();
              this.setIsPlay(false);
            }

            this.playAudio();
          });

          li.append(span);
          playListContainer.append(li);
        });

    return playListContainer
  }
}

export default ViewAudioPlayer;