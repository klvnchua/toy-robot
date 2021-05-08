import { createInterface } from "readline";
import Simulator from "./simulator";
import Table from "./table";
import { parseCommand } from "./utils/parser";

const cli = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const table = new Table();
const simulator = new Simulator(table);

console.log("Welcome to the Toy Robot Game");

cli.prompt(true);

cli.on("line", (input: string) => {
  const parsedInput = parseCommand(input);

  if (parsedInput) {
    simulator.do(parsedInput);
  }

  cli.prompt(true);
});
