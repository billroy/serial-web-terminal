#! /usr/local/bin/node

// bitty.js: node.js-based command line shell for arduino
//

var opt = require('optimist');
var argv = opt.usage('Usage: $0 [flags]')
	.alias('p', 'port')
	.describe('p', 'virtual serial port name')
	.alias('b', 'baud')
	.describe('b', 'virtual serial port baud rate')
	.argv;

if (argv.help) {
	opt.showHelp();
	process.exit();
} 

shell = require("shelljs");
var portlist, portname;

if (argv.port) portlist = shell.ls(argv.port);
else if (process.platform === 'darwin') portlist = shell.ls("/dev/tty.usbserial*");
else if (process.platform === 'linux') portlist = shell.ls("/dev/ttyUSB*");

if (portlist.length == 1) {
	portname = portlist[0];
	process.stdout.write('Opening port ' + portname + '\n');
}
else process.stdout.write('Ports:\n' + portlist.join('\n'));

var SerialPort = require('serialport').SerialPort;
try {
	var port = new SerialPort(portname, {
		baudrate: argv.baud || 57600,
		buffersize: 20480
	});
} catch(e) {
	process.stdout.write('Cannot open serial device.');
}

if (port) {
	port.on('data', function(data) {	// port input goes to stdout
		process.stdout.write(data);
	});
}

process.stdin.resume();
process.stdin.setEncoding('utf8');
require('tty').setRawMode(true);			// pass ^C through to serial port
process.stdin.on('data', function (data) {	// keyboard input goes to port
	if (data === '\x1d') process.exit();	// ^] to quit
	else if (port) port.write(data);
});
