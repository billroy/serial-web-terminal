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
  'https': {
    'key': null,
    'cert': null
  },
  'port': argv.http || 8080,
  'shell': 'node',
  'shellArgs': shellargs,
  'term': {}
};

shell = require('shelljs');
var configfile = process.env['HOME'] + '/.tty.js/config.json';
shell.echo(JSON.stringify(config)).to(configfile);

module.exports = require('tty.js');

