# bitty.js

A web terminal for usb serial devices like Bitlash + Arduino, based on tty.js

![bitty screen shot](bitty-screen-shot.png)

## Prerequisites

 * git
 * node.js
 * npm
 * npm modules: tty.js, serialport, shelljs, and optimist are npm-installed

## Install and Test Drive

	git clone https://github.com/billroy/bitty.js.git
	npm install
	node index.js
	
The server should be running on port 8080.  Connect an arduino via USB, then browse to: 

	openurl http://localhost:8080

Your browser will want credentials.  The default username is 'bitlash' and the default password is 'open sesame'.

Once Bitlash comes up in the terminal you can type commands just like any other terminal emulator.
	
## Security 

Change the default passwords!  Edit config.users in index.js!

	var config = {
		'users': {
			'bitlash':'open sesame'
		}, ...
	}

## Runtime options

	$ node index.js --help
	Usage: node ./index [flags]
	
	Options:
	  -p, --port  virtual serial port name (auto-detects FTDI ports on Mac/Linux)
	  -b, --baud  virtual serial port baud rate (default 57600)                  
	  -h, --http  http port (default 8080)                                       

	$ node index.js -p serialport -b baudrate -h httpport


## Raw bitty.js

Auto-detects first FTDI serial port on Mac and Linux.

	$ node bitty.js --help	Usage: node ./bitty.js [flags]
	
	Options:
	  -p, --port  virtual serial port name (auto-detects FTDI ports on Mac/Linux)
	  -b, --baud  virtual serial port baud rate                                  

	$ node bitty.js -p serialport -b baud

## Todo


## Bugs

  * BUG: seems to reset the Arduino twice, most times.

  * BUG: clicking the tilde allows second shell, which interferes with first
	* allow multiple viewers?
	* disable new-tab?
  
## Caveat

  * Writes to ~/.tty.js/config.json because that's the only way to talk to tty.js
	