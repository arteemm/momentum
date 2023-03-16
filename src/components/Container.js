class Container {
  constructor(className, ...rest) {
    this.container = document.createElement('div')
    this.className = className;
    this.elements = rest;
  }

  render() {
    this.container.className = this.className;

    this.container.append(...this.elements);

    return this.container
  }
}

export default Container;