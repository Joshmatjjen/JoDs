/**
 * Created by Created by Joshmat 10/1/2020.
 */

import View from '../../base/view';
import template from './template';

export default class WelcomeView extends View {
  constructor (el, context) {
    super(el, template, context, null);

    this.context.api.generateInterviewId();
  }
}
