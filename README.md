# bitty.js

## A web terminal for usb serial devices like Bitlash + Arduino, based on tty.js


## Prerequisites

 * git
 * node.js
 * npm
 * npm modules: tty.js, serialport, shelljs, and optimist are npm-installed

## Install

	git clone https://github.com/billroy/bitty.js.git
	npm install
	node index.js
	openurl localhost:8080

## Runtime options

	$ node --help
	Usage: node ./index [flags]
	
	Options:
	  -p, --port  virtual serial port name                     
	  -b, --baud  virtual serial port baud rate (default 57600)
	  -h, --http  http port (default 8080)                     

	$ node index.js -p serialport -b baudrate -h httpport


## Raw bitty.js

Auto-finds first FTDI serial port on Mac and Linux.

	node bitty.js -p serialport -b baud

## Todo


## Bugs

  * BUG: seems to reset the Arduino twice, most times.

  * BUG: clicking the tilde allows second shell, which interferes with first
	* allow multiple viewers?
	* disable new-tab?
  
## Caveat

  * Writes to ~/.tty.js/config.json because that's the only way to talk to tty.js
	