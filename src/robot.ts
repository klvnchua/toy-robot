import { Direction, ICommand, IPosition } from "./simulator";
import Table from "./table";

export default class Robot {
  public position: IPosition;
  public direction: Direction;

  constructor(position: IPosition, direction: Direction) {
    this.position = position;
    this.direction = direction;
  }

  public place(input: ICommand, table: Table) {
    if (input.position) {
      this.position.x =
        input.position.x < table.width && input.position.y < table.length
          ? input.position.x
          : this.position.x;
      this.position.y =
        input.position.x < table.width && input.position.y < table.length
          ? input.position.y
          : this.position.y;
    }
  }

  public turnLeft(): Direction {
    switch (this.direction) {
      case Direction.NORTH:
        return (this.direction = Direction.WEST);
      case Direction.WEST:
        return (this.direction = Direction.SOUTH);
      case Direction.SOUTH:
        return (this.direction = Direction.EAST);
      case Direction.EAST:
        return (this.direction = Direction.NORTH);
    }
  }

  public turnRight(): Direction {
    switch (this.direction) {
      case Direction.NORTH:
        return (this.direction = Direction.EAST);
      case Direction.WEST:
        return (this.direction = Direction.NORTH);
      case Direction.SOUTH:
        return (this.direction = Direction.WEST);
      case Direction.EAST:
        return (this.direction = Direction.SOUTH);
    }
  }

  public move(table: Table) {
    switch (this.direction) {
      case Direction.NORTH:
        this.position.y =
          this.position.y + 1 === table.length
            ? this.position.y
            : this.position.y + 1;
        return `${this.position.x}, ${this.position.y}`;
      case Direction.WEST:
        this.position.x =
          this.position.x - 1 < 0 ? this.position.x : this.position.x - 1;
        return `${this.position.x}, ${this.position.y}`;
      case Direction.SOUTH:
        this.position.y =
          this.position.y - 1 < 0 ? this.position.y : this.position.y - 1;
        return `${this.position.x}, ${this.position.y}`;
      case Direction.EAST:
        this.position.x =
          this.position.x + 1 === table.width
            ? this.position.x
            : this.position.x + 1;
        return `${this.position.x}, ${this.position.y}`;
    }
  }

  public report() {
    return `${this.position.x},${this.position.y},${this.direction}`;
  }
}
