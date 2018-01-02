let prompt = require('prompt')

prompt.colors = false;

var schema = {
  properties: {
    name: {
      message: 'hey i hope this shows up',
      required: true
    }
  }
}

prompt.start();
