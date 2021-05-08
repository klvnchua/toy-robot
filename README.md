# toy-robot
The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 x 5.

It takes in one of the following commands
```
PLACE X,Y,F // X and Y axis, Direction
MOVE // Move the toy robot one unit forward in the direction currently facing
LEFT // Turn the robot 90 degrees left
RIGHT // Turn the robot 90 degrees right
REPORT // Report current position
```

The first valid command to the robot is a PLACE command, after that, any sequence of
commands may be issued, in any order, including another PLACE command. The application
will discard all commands in the sequence until a valid PLACE command has been
executed.

#### Example Input & Ouput

```
> PLACE 0,0,NORTH
> MOVE
> REPORT
> 0,1,NORTH
```


## Install
```bash
$ npm i
```

## Starting the app
```bash
$ npm run start
```

## Testing
```bash
$ npx jest
```
