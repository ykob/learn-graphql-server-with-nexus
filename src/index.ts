import { startStandaloneServer } from "@apollo/server/standalone";
import { server } from "./server.ts";

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at: ${url}`);
