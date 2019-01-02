function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result === answer) {
    ok();
  } else {
    fail();
  }
}
var user = {
  login: 'Andrew',
  password: '12345',

  loginOk: function() {
    console.log(this.login + ' - login success');
  },

  loginFail: function() {
    console.log(this.login + ' - login failed');
  },
  // bind
  checkPassword: function() {
    ask ("Your password?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
  },
  //cloused
  checkPassword: function() {
    var context = this;
    ask ("Your password?", context.password,  
      function() {
        return context.loginOk()
      },
      function() {
        return context.loginFail()
      }
    )
  }
};

user.checkPassword();

var user2 = user;
user = null;
user2.checkPassword();
