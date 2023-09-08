import { SpaceXApi } from "./datasources/SpaceXApi.js";
import { database, Database } from "./database.js";
import { server } from "./server.js";

export interface Context {
  database: Database;
  dataSources: {
    spaceXApi: SpaceXApi;
  };
}

export const context = (): Context => ({
  database,
  dataSources: {
    spaceXApi: new SpaceXApi({ cache: server.cache }),
  },
});
