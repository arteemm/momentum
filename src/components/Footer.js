import Settings from './Settings';
import Quote from './Quote';


class Footer {
  constructor(props) {
    this.quote = new Quote();
    this.settings = new Settings(props);
  }

  render() {
    const footer = document.createElement('footer');
    footer.className = 'footer';

    footer.append(
      this.settings.render(),
      this.quote.render(),
    );

    return footer;
  }
}

export default Footer;