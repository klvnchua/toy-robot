import { IPosition } from "./simulator";

export default class Table {
  public width: number;
  public length: number;
  constructor(x: number = 5, y: number = 5) {
    this.width = x;
    this.length = y;
  }
  public withinBoundaries(position: IPosition): boolean {
    if (position.x < this.width && position.y < this.length) {
      return true;
    }
    return false;
  }
}
