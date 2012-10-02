//
//	index.js for bitty.js terminal shell server
//
//	Copyright 2012 Bill Roy (MIT License)
//
var opt = require('optimist');
var argv = opt.usage('Usage: $0 [flags]')
	.alias('p', 'port')
	.describe('p', 'virtual serial port name (auto-detects FTDI ports on Mac/Linux)')
	.alias('b', 'baud')
	.describe('b', 'virtual serial port baud rate (default 57600)')
	.alias('h', 'http')
	.describe('h', 'http port (default 8080)')
	.argv;

if (argv.help) {
	opt.showHelp();
	process.exit();
} 

var shellargs = [process.cwd() + '/bitty.js'];
if (argv.port) { shellargs.push('-p'); shellargs.push(argv.port); }
if (argv.baud) { shellargs.push('-b'); shellargs.push(argv.baud); }

var config = {
  'users': {
  	'bitlash':'open sesame'
  	},
  // 'hostname': '0.0.0.0',		// to serve on all ports instead of just localhost
  'https': {
    'key': null,
    'cert': null
  },
  'port': argv.http || 8080,
  'shell': 'node',
  'shellArgs': shellargs,
  'limitGlobal': 1,
  'limitPerUser': 1,
  'term': {}
//    visualBell: true
//  }
};

var tty = require('tty.js');
var app = tty.createServer(config);
app.listen();

module.exports = app;
