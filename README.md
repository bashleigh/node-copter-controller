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