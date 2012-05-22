#! /usr/local/bin/node

// todo: find the port automatically
// todo: parse command line for baud rate and port
// package.json deps: serialport

var serialport = require("serialport");
var SerialPort = serialport.SerialPort;
var port = new SerialPort("/dev/tty.usbserial-A600emm9", {
	baudrate: 57600,
	//parser: serialport.parsers.readline("\r")
});

// port input goes to stdout
port.on("data", function(data) { 
	process.stdout.write(data); 
});

// keyboard input goes to port
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (data) {
	if (data === 'quit') done();
	else port.write(data);
});

function done() {
	console.log('Now that process.stdin is paused, there is nothing more to do.');
	process.exit();
}
