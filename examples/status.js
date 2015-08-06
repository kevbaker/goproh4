var GoPro = require('../lib/index.js');

var goProConfig = {
  ip: '10.5.5.9',
  broadcastip: '10.5.5.255'
};


//var cam = new GoPro.Camera(goProConfig);
var cam = new GoPro.Camera();

/*
 **  Read one state
 */

cam.status(GoPro.Status.InternalBatteryLevel).then(function (battery_level) {
  console.log('[battery level] = ', battery_level);
});

/*
 **  Read all the status
 */
cam.status().then(function (status) {
  console.log('[status] = ', status);
});
