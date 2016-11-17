import Ember from 'ember';

export default Ember.Controller.extend({

  message: '',
  email: '',

  isValidEmail: Ember.computed.match('email', /^.+@.+\..+$/),
  isValidMessage: Ember.computed.gte('message.length', 5),

  isValid: Ember.computed.and('isValidEmail', 'isValidMessage'),

  actions: {

    saveMessage() {
      alert(`Email: ${this.get('email')}, Message: ${this.get('message')} Do you want to send these?`);
      this.set('responseMessage', `Thank you! We've received your message and will be in touch soon.`);
      this.set('message', '');
      this.set('email', '');
    }
  }
});
