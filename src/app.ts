import { yarg as argv} from "./plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

const [tsnode, app, ...args] = process.argv;

(async () => {
    await main();
})();

async function main() {
    const {b:base, l:limit, s:showTable, n:name, d:destination} = argv;
    ServerApp.run({base, limit, showTable, name, destination});
}