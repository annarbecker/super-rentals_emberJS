import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },

    save1() {
      var params = {
        owner: this.get('owner') ? this.get('owner') : "",
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
        cost: parseInt(this.get('cost'))
      };
      this.set('addNewRental', false),
      this.sendAction('save2', params);
      this.set('owner', '');
      this.set('type', '');
      this.set('image', '');
      this.set('bedrooms', '');
      this.set('cost', '');
    }
  }
});
