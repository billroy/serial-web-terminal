## bitty.js: web terminal for Bitlash based on tty.js

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


### Bugs

  * BUG: ^C ends the shell; should send ^C to Arduino

  * BUG: clicking the tilde allows second shell, which interferes with first
  
  * BUG: seems to boot twice, sometimes.  Double-initing the serial?