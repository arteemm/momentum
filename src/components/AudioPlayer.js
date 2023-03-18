import playList from '../data/playList';
import ViewAudioPlayer from '../View/ViewAudio';

class AudioPlayer {
  constructor() {
    this.viewAudioPlayer = new ViewAudioPlayer({      
      playPrev: this.playPrev.bind(this),
      playNext: this.playNext.bind(this),
      playAudio: this.playAudio.bind(this),
      changeVolume: this.audioVolume.bind(this),
      toggleVolume: this.toggleVolume.bind(this),
      setPlayNum: this.setPlayNum.bind(this),
      setAudioLink: this.setAudioLink.bind(this),
      getPlayNum: this.getPlayNum.bind(this),
      setIsPlay: this.setIsPlay.bind(this),
    });

    this.isPlay = false;
    this.isVolume = true;
    this.memoryVolume = 0;
    this.playNum = 0;
    this.audio = new Audio();
    this.audio.src = playList[this.playNum].src;
    this.audio.ontimeupdate = this.progressUpdate.bind(this);

    this.viewAudioPlayer.progressText.textContent = playList[this.playNum].title;
    this.viewAudioPlayer.audioProgress.onclick = this.audioRewind.bind(this);
  }

  setPlayNum(playNum) {
    this.playNum = playNum;
  }

  getPlayNum = () => this.playNum;

  setIsPlay(isPlay) {
    this.isPlay = isPlay;
  }

  playAudio() {
    if (!this.isPlay) {
      this.isPlay = true;
      this.audio.loadeddata = this.audio.play();
    } else {
      this.isPlay = false;
      this.audio.pause();
    }
    this.viewAudioPlayer.progressText.textContent = playList[this.playNum].title;
    this.changePlayIcons();
  }

  changePlayIcons() {
    const smallIconsList = document.querySelectorAll('.item-play');
    smallIconsList.forEach(item => item.classList.remove('item-play_active'));

    if (this.isPlay) {
      this.viewAudioPlayer.playButton.classList.add('pause');
      smallIconsList[this.playNum].classList.add('item-play_active');
    } else {
      this.viewAudioPlayer.playButton.classList.remove('pause');
      smallIconsList[this.playNum].classList.remove('item-play_active');
    }
  }

  setAudioLink() {
    this.audio.src = playList[this.playNum].src;
  }

  audioToggle() {
    this.audio.currentTime = 0;
    this.setAudioLink();
    if (this.isPlay) {
      this.isPlay = false;
    }
    this.playAudio();
  }

  playNext() {
    if(this.playNum === 3) {
      this.playNum = -1;
    }
    this.playNum += 1;
    this.audioToggle();
  }

  playPrev() {
    if(this.playNum === 0) {
      this.playNum = 4;
    }
    this.playNum -= 1;
    this.audioToggle();
  }

  getDurationAudio(duration) {
    const durationMinutes = `${Math.floor(duration / 60) || '00'}`.padStart(2, 0);
    let durationSeconds = Math.trunc(duration) || '00';
    while (durationSeconds >= 60) {
      durationSeconds -= 60;
    }
    return [durationMinutes, `${Math.round(durationSeconds)}`.padStart(2, 0)];
  }

  progressUpdate() {
    const { duration } = this.audio;
    const { currentTime } = this.audio;
    this.viewAudioPlayer.audioProgress.value = (100 * currentTime) / duration || 0;
    const [durationMinutes, durationSeconds] = this.getDurationAudio(duration);
    this.viewAudioPlayer.audioDuration.textContent = `${durationMinutes}:${durationSeconds}`;
    const [currentTimeMinutes, currentTimeSeconds] = this.getDurationAudio(currentTime);
    this.viewAudioPlayer.currentTime.textContent = `${currentTimeMinutes}:${currentTimeSeconds}`;
    if (currentTime === duration) {
      this.playNext();
    }
  }

  audioRewind(event) {
    const width = this.viewAudioPlayer.audioProgress.offsetWidth;
    const { offsetX } = event;
    this.value = (100 * offsetX) / width;
    this.audio.pause();
    this.audio.currentTime = this.audio.duration * (offsetX / width);
    if(this.isPlay) {
      this.isPlay = false;
    }
    this.playAudio();
  }

  audioVolume(e) {
    this.audio.volume = e.target.value / 100;
    if (!this.isVolume) {
      this.isVolume = true;
      this.viewAudioPlayer.volume.classList.remove('mute');
    }
  }

  toggleVolume() {
    if (this.isVolume) {
      this.isVolume = false;
      this.memoryVolume = this.audio.volume;
      this.audio.volume = 0;
      this.viewAudioPlayer.volume.classList.add('mute');
      this.viewAudioPlayer.volumeProgress.volume = '0';
    } else {
      this.isVolume = true;
      this.viewAudioPlayer.volume.classList.remove('mute');
      this.audio.volume = this.memoryVolume;
      this.viewAudioPlayer.volumeProgress.volume = this.memoryVolume;
    }
  }

  render() {
    const player = document.createElement('div');
    player.className = 'player'

    player.append(
      this.viewAudioPlayer.createControlsContainer(),
      this.viewAudioPlayer.createPlayerContainer(),
      this.viewAudioPlayer.createPlayListContainer(),
    )

    return player;
  }
}

export default AudioPlayer;




