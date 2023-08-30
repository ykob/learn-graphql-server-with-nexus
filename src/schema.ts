import { makeSchema } from "nexus";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import * as types from "./graphql/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(__dirname, "..", "dist", "nexus-typegen.ts"),
    schema: join(__dirname, "..", "dist", "schema.graphql"),
  },
  contextType: {
    module: join(__dirname, "..", "src", "context.ts"),
    export: "Context",
  },
});
