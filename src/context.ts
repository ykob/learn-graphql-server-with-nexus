import { dataBase, DataBase } from "./database.js";

export interface Context {
  dataBase: DataBase;
}

export const context: Context = {
  dataBase,
};
