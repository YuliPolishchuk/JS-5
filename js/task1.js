'use strict';
var context = {
  name: 'name1',
  getName: function() {
    console.log(this.name);
  }
};

context.getName();



