import Clock from './Clock';
import Container from './Container';
import Button from './Button';


class MainSection {
  constructor(props) {
    this.clock = new Clock(props);
    this.clock.render();
    this.buttonNext = new Button(this.createButtonNext()).render();
    this.buttonPrev = new Button(this.createButtonPrev()).render();

    this.getSlidePrev = props.getSlidePrev;
    this.getSlideNext = props.getSlideNext;
  }

  createButtonPrev() {
    return {
      label: '',
      type: 'button',
      className: 'slide-prev slider-icon',
      onClick: () => this.getSlidePrev()(),
    }
  }

  createButtonNext() {
    return {
      label: '',
      type: 'button',
      className: 'slide-next slider-icon',
      onClick: () => this.getSlideNext()(),
    }
  }

  createSliderButtonContainer() {
    return new Container(
      'slider-icons',
      this.buttonPrev,
      this.buttonNext,
    ).render();
  }

  render() {
    const main = document.createElement('main');
    main.className = 'main';

    main.append(
      this.createSliderButtonContainer(),
      this.clock.viewClock.timeElem,
      this.clock.viewClock.dateElem,
      this.clock.viewClock.createGreetingContainer(),
    );

    return main;
  }
}

export default MainSection;