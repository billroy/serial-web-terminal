#! /usr/local/bin/node

// todo: find the /dev/tty/... port automatically
// todo: parse command line for baud rate and port

var SerialPort = require('serialport').SerialPort;
var port = new SerialPort('/dev/tty.usbserial-A600emm9', {
	baudrate: 57600,
	buffersize: 20480
});

port.on('data', function(data) {	// port input goes to stdout
	process.stdout.write(data);
});

process.stdin.resume();
process.stdin.setEncoding('utf8');
require('tty').setRawMode(true);			// pass ^C through to serial port
process.stdin.on('data', function (data) {	// keyboard input goes to port
	if (data === '\x1d') process.exit();	// ^] to quit
	else port.write(data);
});
