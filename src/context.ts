import { dataBase, DataBase } from "./database.ts";

export interface Context {
  dataBase: DataBase;
}

export const context: Context = {
  dataBase,
};
