/**
 * Created by Joshmat 10/1/2020.
 */

export default class Controller {
  constructor (el) {
    this.el = el;
  }

  render () {
    this.view.render();
  }

  setView (name, context) {
    this._beforeSetView(name);
    const ViewClass = this.viewMapper[name];
    this.view = new ViewClass(this.el, context);
    this.render();
  }

  destroyView () {
    this.view.destroy();
  }

  _beforeSetView (name) {
    // intentionally left blank
  }
}

