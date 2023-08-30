import { ApolloServer } from "@apollo/server";
import { schema } from "./schema.js";

export const server = new ApolloServer({ schema });
