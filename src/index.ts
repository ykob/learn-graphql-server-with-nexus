import { startStandaloneServer } from "@apollo/server/standalone";
import { context } from "./context";
import { server } from "./server";

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => ({
    ...context,
  }),
});

console.log(`🚀 Server ready at: ${url}`);
