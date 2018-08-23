import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  printThis: service(),
  actions: {
    print() {
      const options = {
        printDelay: 3000,
      }
      this.get('printThis').print('.print-example', options);
    }
  }
});
