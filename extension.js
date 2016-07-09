new (function() {
  var ext = this;
  var descriptor = {
    blocks: [
      [' ', 'ONE: digital pin %m.pin setting %m.dsetting', 'setDigital', '1', 'off'],
      [' ', 'ONE: pwm pin %m.ppin setting %n', 'setPwm', '1', '100'],
      [' ', 'ONE: digital pin %m.pin get', 'getDigital', '1'],
      [' ', 'ONE: pwm pin %m.ppin get', 'getPwm', '1']
    ],
    'menus': {
      'pin': ['1', '2', '3'],
      'dsetting': ['on', 'off'],
      'ppin': ['1', '2']
     },
    url: 'https://github.com/savaka2/scratch-extensions/wiki/Link-Opener-extension'
  };
  ext._shutdown = function() {};
  ext._getStatus = function() {
    return {status: 2, msg: 'Device connected'};
  };
  ext.getPwm = function(pin) {
  };
  ext.setPwm = function(pin, setting) {
    var p = 4;
    if(pin == 2) {
      p = 5;
    }
    var url = 'http://192.168.0.4/gpio' + p + '/' + setting;
    $.ajax({
      type: 'POST',
      url: url,
      async: false,
      success: function(response) {
      }
    });
  };
  ext.getDigital = function(pin) {
  };
  ext.setDigital = function(pin, setting) {
    var s = 1;
    if(setting == 'off') {
      s = 0;
    }
    var p = 12;
    if(pin == 1) {
      p = 12;
    }
    else if(pin == 2) {
      p = 13;
    }
    else if(pin == 3) {
      p = 14;
    }
    p = 2;
    var url = 'http://192.168.0.4/gpio' + p + '/' + s; 
$.ajax({
type: 'POST', 
url: url,
async: false,
success: function(response) {
}
});
};
ScratchExtensions.register('ONE', descriptor, ext);})();
