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
      className: 'play-prev player-icon',
      onClick: this.playPrev,
    }
  }

  createPlayButton() {
    return {
      label: '',
      type: 'button',
      className: 'play player-icon',
      onClick: this.playAudio,
    }
  }

  createNextButton() {
    return {
      label: '',
      type: 'button',
      className: 'play-next player-icon',
      onClick: this.playNext,
    }
  }

  createControlsContainer() {
    return new Container(
      'player-controls',
      this.prevButton,
      this.playButton,
      this.nextButton,
    ).render();
  }

  createPlayerTimeContainer() {
    this.currentTime.className = 'current-time';
    this.currentTime.textContent = '00:00';
    this.audioDuration.className = 'audio-duration';
    this.audioDuration.textContent = '00:00';
    const slash = document.createElement('span');
    slash.textContent = '/';

     return new Container(
      'player-time',
      this.currentTime,
      slash,
      this.audioDuration,
    ).render();
  }

  createPlayerProgressContainer() {
    this.audioProgress.className = 'progress-text';
    this.progressText.className = 'audio-progress';
    this.audioProgress.max = '100';
    this.audioProgress.value = '0';

    return new Container(
      'player-progress',
      this.progressText,
      this.audioProgress,
    ).render();
  }

  createVolumeRange() {
    return {
      className: 'volume-progress',
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
      className: 'volume',
      onClick: this.toggleVolume,
    }
  }

  createPlayerContainer() {
    return new Container(
      'prayer-container',
      this.createPlayerTimeContainer(),
      this.createPlayerProgressContainer(),
      this.volume,
      this.volumeProgress,
    ).render();
  }

  createPlayListContainer() {
    const playListContainer = document.createElement('ul');
    playListContainer.className = 'play-list';

    playList.forEach((item, index) => {
          const li = document.createElement('li');
          const span = document.createElement('span');
          li.classList.add('play-item');
          span.classList.add('item-play');
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