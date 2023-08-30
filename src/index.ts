import { startStandaloneServer } from "@apollo/server/standalone";
import { context } from "./context.ts";
import { server } from "./server.ts";

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => ({
    ...context,
  }),
});

console.log(`🚀 Server ready at: ${url}`);
