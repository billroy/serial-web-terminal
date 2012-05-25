## bitty.js: web terminal for usb serial devices like Bitlash, based on tty.js


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

UGLY: edit the config.json for tty.js

### Todo

  * start tty from index.js or bittyd.js with port and config args
  * http port argument for web shell server

### Bugs

  * BUG: shellArgs in config.json has/needs hardcoded path

  * BUG: clicking the tilde allows second shell, which interferes with first
	* allow multiple viewers?
	* disable new-tab?
  
  * BUG: seems to boot twice, most times.

	