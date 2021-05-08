import Robot from "./robot";
import Table from "./table";

export const enum Command {
  PLACE = "PLACE",
  MOVE = "MOVE",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  REPORT = "REPORT",
}

export const enum Direction {
  NORTH = "NORTH",
  SOUTH = "SOUTH",
  EAST = "EAST",
  WEST = "WEST",
}

export interface IPosition {
  x: number;
  y: number;
}

export interface ICommand {
  command: Command;
  position?: IPosition;
  direction?: Direction;
}

export default class Simulator {
  private robot: Robot | undefined;
  private table: Table;

  constructor(table: Table) {
    this.table = table;
  }

  public do(input: ICommand): void {
    if (this.robot) {
      switch (input.command) {
        case Command.PLACE:
          this.robot.place(input, this.table);
          break;
        case Command.LEFT:
          this.robot.turnLeft();
          break;
        case Command.RIGHT:
          this.robot.turnRight();
          break;
        case Command.MOVE:
          this.robot.move(this.table);
          break;
        case Command.REPORT:
          console.log(this.robot.report());
          break;
        default:
          break;
      }
    }

    if (input.command === Command.PLACE && !this.robot) {
      const { position = { x: 0, y: 0 }, direction = Direction.NORTH } = input;
      const safe = this.table.withinBoundaries(position);
      if (safe) {
        this.robot = new Robot({ x: position.x, y: position.y }, direction);
      }
    }
  }
}
