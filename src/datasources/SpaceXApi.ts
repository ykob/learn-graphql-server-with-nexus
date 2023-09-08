import { RESTDataSource } from "@apollo/datasource-rest";

export class SpaceXApi extends RESTDataSource {
  override baseURL = "https://api.spacexdata.com/v4/";

  async rockets() {
    return await this.get("rockets");
  }
}
