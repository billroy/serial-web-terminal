## bitty.js: web terminal for Bitlash based on tty.js


### Prerequisites

 * git
 * node.js
 * npm

### Install

git clone...
npm install
npm start
openurl localhost:8080

### Configure

edit the config.json

### Todo

  * auto-find the serial port
  * --port and --baud arguments
  * --port argument for web shell server
  	* name conflict

  * start tty from index.js with port and config args

### Bugs

  * BUG: shellArgs in config.json has/needs hardcoded path

  * BUG: clicking the tilde allows second shell, which interferes with first
	* allow multiple viewers?
	* disable new-tab?
  
  * BUG: seems to boot twice, most times.

  * BUG: with no arduino plugged in, shell exits with only a brief flash of black

  * BUG: quit doesn't work

	