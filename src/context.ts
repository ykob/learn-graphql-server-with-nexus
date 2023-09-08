import { database, Database } from "./database.js";

export interface Context {
  database: Database;
}

export const context: Context = {
  database,
};
