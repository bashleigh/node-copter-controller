Copter Controller 
===

A reusable 'controller' for controlling copter applications via socket. Enabling you to control your socket based copters using your computer.

Saves buying an expensive controller.

## Key mapping

key mappings are currently hardcoded. I'd like to make them setting based but for now they're defined within the state of the Controller Component.

Mappings are as follows:

Key | function
--- | ---
a | Yaw left
d | Yaw right
w | pitch forward
s | pitch backwards
e | nudge throttle up
f | nudge throttle down
ArrowUp | increase throttle
ArrowDown | decrease throttle
ArrowLeft | rotate clockwise
ArrowRight | rotate anti-clockwise

## ENV 
Currently this only enables electron devtools and redux-devtools, but I've found electron doesn't add redux-devtools to the chrome devtools.
```
ENV=development
```
To turn on the devtools on load of electron, set `DEVTOOLS` to true
```
DEVTOOLS=true
```
### Socket
I've made a simple socket connection config for changing the port, url and whether we require http or https.
```
SOCKET_PORT=3000
SOCKET_URL=localhost
SOCKET_SECURE=false
```

### Throttle increment control
Here you can change the throttle precentage increment.
```
THROTTLE_SPEED=2
```

### Key down checking iterator duration
Below is the env for changing the looper interval of `checkKeys` function within the controller. The `checkKeys` function checks which keys are currently pressed down and does their relevant function called based on the keymap object within the controller component.  
```
LOOP_INTERVAL=100
```

### Development 

- [ ] Test socket use with xBee
- [ ] Build socket status checking and connection error messages
- [ ] Settings to change key mapping
- [ ] Setting to emit calibration 
- [ ] Logging of altitude and movements returned from gyroscope, magnetometer, GPS etc
- [ ] Options to turn off certain components like GPS tracking
- [ ] Battery remaining socket on receive 
- [ ] Graphs of returned logged data
- [ ] Visual of returned data to represent Yaw, rotation, pitch, altitude, bearing etc.
- [ ] When you get good: have a go at flips and tricks 
- [ ] Binding custom functions, for example: turning off LEDs 
- [ ] Separate ESC monitoring from returned data
- [ ] Emergency stop button/key map function 
- [ ] Add alternative means of communication instead of socket.io
- [ ] Log response latency 