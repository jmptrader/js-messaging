'use strict';

const {createMessageBus} = require('../lib');

const withUpperCaseText = m => Object.assign({}, m, {payload: m.payload.toUpperCase()});
const withoutSpaceInText = m => Object.assign({}, m, {payload: m.payload.replace(' ', '-')});

const bus = createMessageBus({
  beforePost: [
    withUpperCaseText,
    withoutSpaceInText
  ]
});
bus.register('PrintText', message => console.log(message.payload));
bus.post({type: 'PrintText', payload: 'Hello world'});

// HELLO-WORLD
