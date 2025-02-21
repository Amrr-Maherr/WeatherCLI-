const yargs = require("yargs");
const Actions = require("./Actions");

yargs.command({
  command: "get",
  describe: "Get weather data for a place",
  builder: {
    place_name: {
      describe: "The name of the place",
      type: "string",
      demandOption: true,
    },
  },
  handler: (argv) => {
    Actions.GetData(argv.place_name);
  },
});

yargs.parse();
