/**
 * Created by Created by Joshmat 10/1/2020.
 */

import DemoApp from './app';

const app = new DemoApp(document.getElementById('app'));

window.addEventListener('load', () => {
  app.render();
  app.startInterview();
});
