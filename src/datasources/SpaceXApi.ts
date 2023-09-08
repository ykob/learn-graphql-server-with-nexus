import { RESTDataSource } from "@apollo/datasource-rest";

type Rocket = {
  id: string;
  name: string;
};
type Ship = {
  id: string;
  name: string;
};

export class SpaceXApi extends RESTDataSource {
  override baseURL = "https://api.spacexdata.com/v4/";

  rockets(): Promise<Rocket[]> {
    return this.get("rockets");
  }

  rocket(id: string): Promise<Rocket> {
    return this.get(`rockets/${encodeURIComponent(id)}`);
  }

  ships(): Promise<Ship[]> {
    return this.get("ships");
  }
}
