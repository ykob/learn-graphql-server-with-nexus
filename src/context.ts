import { dataBase, DataBase } from "./database";

export interface Context {
  dataBase: DataBase;
}

export const context: Context = {
  dataBase,
};
