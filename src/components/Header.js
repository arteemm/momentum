import AudioPlayer from './AudioPlayer';
import Weather from './Weather';

class Header {
  constructor() {
    this.audioPlayer = new AudioPlayer();
    this.weather = new Weather();
  }

  render() {
    const header = document.createElement('header');
    header.className = 'header';

    header.append(
      this.audioPlayer.render(),
      this.weather.render(),
    );

    return header;
  }
}

export default Header;