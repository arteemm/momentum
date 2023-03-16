import AudioPlayer from './AudioPlayer';

class Header {
  constructor() {
    this.audioPlayer = new AudioPlayer();
  }

  render() {
    const header = document.createElement('header');
    header.className = 'header';

    header.append(
      this.audioPlayer.render(),
    );

    return header;
  }
}

export default Header;