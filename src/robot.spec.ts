import Robot from "./robot";
import { Direction } from "./simulator";
import Table from "./table";

describe("Robot", () => {
  describe("place robot", () => {
    it("should be initialised with valid settings", () => {
      const robot: Robot = new Robot({ x: 0, y: 0 }, Direction.NORTH);
      expect(robot.report()).toMatch("0,0,NORTH");
      expect(robot.direction).toMatch(Direction.NORTH);
    });

    it("should not be initialised with invalid settings", () => {
      const robot: Robot = new Robot({ x: 5, y: 5 }, Direction.NORTH);
      expect(robot.report()).toMatch("");
      expect(robot.direction).toMatch(Direction.NORTH);
    });
  });

  describe("turning left", () => {
    it("should turn the robot left", () => {
      const robot: Robot = new Robot({ x: 0, y: 0 }, Direction.NORTH);
      expect(robot.direction).toMatch(Direction.NORTH);

      expect(robot.turnLeft()).toMatch(Direction.WEST);
      expect(robot.direction).toMatch(Direction.WEST);

      expect(robot.turnLeft()).toMatch(Direction.SOUTH);
      expect(robot.direction).toMatch(Direction.SOUTH);

      expect(robot.turnLeft()).toMatch(Direction.EAST);
      expect(robot.direction).toMatch(Direction.EAST);
    });
  });

  describe("turning right", () => {
    it("should turn the robot right", () => {
      const robot: Robot = new Robot({ x: 0, y: 0 }, Direction.NORTH);
      expect(robot.direction).toMatch(Direction.NORTH);

      expect(robot.turnRight()).toMatch(Direction.EAST);
      expect(robot.direction).toMatch(Direction.EAST);

      expect(robot.turnRight()).toMatch(Direction.SOUTH);
      expect(robot.direction).toMatch(Direction.SOUTH);

      expect(robot.turnRight()).toMatch(Direction.WEST);
      expect(robot.direction).toMatch(Direction.WEST);
    });
  });

  describe("moving the robot", () => {
    it("should move the robot with valid settings", () => {
      const robot: Robot = new Robot({ x: 0, y: 0 }, Direction.NORTH);
      const table: Table = new Table(5, 5);
      expect(robot.report()).toMatch("0,0,NORTH");

      expect(robot.move(table)).toMatch("0, 1");
      expect(robot.move(table)).toMatch("0, 2");
      expect(robot.move(table)).toMatch("0, 3");
      expect(robot.move(table)).toMatch("0, 4");

      expect(robot.turnRight()).toMatch(Direction.EAST);
      expect(robot.move(table)).toMatch("1, 4");
      expect(robot.turnRight()).toMatch(Direction.SOUTH);
      expect(robot.move(table)).toMatch("1, 3");
      expect(robot.turnRight()).toMatch(Direction.WEST);
      expect(robot.move(table)).toMatch("0, 3");
    });

    it("should not move the robot with invalid settings", () => {
      const robot: Robot = new Robot({ x: 0, y: 0 }, Direction.NORTH);
      const table: Table = new Table(5, 5);
      expect(robot.report()).toMatch("0,0,NORTH");

      expect(robot.turnLeft()).toMatch(Direction.WEST);
      expect(robot.move(table)).toMatch("0, 0");

      expect(robot.turnLeft()).toMatch(Direction.SOUTH);
      expect(robot.move(table)).toMatch("0, 0");

      expect(robot.turnLeft()).toMatch(Direction.EAST);
      expect(robot.move(table)).toMatch("1, 0");
      expect(robot.move(table)).toMatch("2, 0");
      expect(robot.move(table)).toMatch("3, 0");
      expect(robot.move(table)).toMatch("4, 0");
      expect(robot.move(table)).toMatch("4, 0");
    });
  });

  describe("report", () => {
    it("should report the robot's current position", () => {
      const robot: Robot = new Robot({ x: 0, y: 0 }, Direction.NORTH);
      const table: Table = new Table(5, 5);
      expect(robot.report()).toMatch("0,0,NORTH");

      expect(robot.move(table)).toMatch("0, 1");
      expect(robot.report()).toMatch("0,1,NORTH");
    });
  });
});
