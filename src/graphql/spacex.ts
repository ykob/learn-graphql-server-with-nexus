import { extendType, list, nonNull, objectType } from "nexus";

export const Rocket = objectType({
  name: "Rocket",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("name");
  },
});

export const RocketsQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("rockets", {
      type: nonNull(list("Rocket")),
      async resolve(_root, _args, ctx) {
        return await ctx.dataSources.spaceXApi.rockets();
      },
    });
  },
});
