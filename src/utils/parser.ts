import { Command, Direction, ICommand } from "../simulator";

export const parseCommand = (input: string) => {
  if (input.split(" ").length === 1) {
    if (input.match(/^(LEFT|RIGHT|MOVE|REPORT)$/gi)) {
      return { command: input.toUpperCase() as Command };
    }
  }

  if (input.split(" ").length === 2) {
    if (input.split(" ")[0] === "PLACE") {
      const placeSettings = input.split(" ")[1];
      if (placeSettings.match(/\d,\d,(NORTH|SOUTH|EAST|WEST)/gi)) {
        return {
          command: input.split(" ")[0] as Command,
          position: {
            x: parseInt(placeSettings.split(",")[0]),
            y: parseInt(placeSettings.split(",")[1]),
          },
          direction: placeSettings.split(",")[2] as Direction,
        };
      }
    }
  }
};
