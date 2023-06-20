import FilterListener from './filter_eventListener.js';

export default class Accessibility {
  static listen() {
    this.listenBody();
  }

  static listenBody() {
    const body = document.querySelector('body');

    body.focus();
    body.addEventListener('keydown', (e) => {
      const keyCode = e.keyCode ? e.keyCode : e.which;

      if (keyCode === 13) {
        FilterListener.listen();
      }
    });
  }
}
