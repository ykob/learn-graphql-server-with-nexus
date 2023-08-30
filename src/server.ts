import { ApolloServer } from "@apollo/server";
import { schema } from "./schema.ts";

export const server = new ApolloServer({ schema });
