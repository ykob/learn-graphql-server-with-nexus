import { extendType, list, nonNull, objectType, stringArg } from "nexus";

export const Rocket = objectType({
  name: "Rocket",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("name");
  },
});

export const Ship = objectType({
  name: "Ship",
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
        const data = await ctx.dataSources.spaceXApi.rockets();

        return data.map(({ id, name }) => ({
          id,
          name,
        }));
      },
    });

    t.field("rocket", {
      type: nonNull("Rocket"),
      args: {
        id: nonNull(stringArg()),
      },
      async resolve(_root, args, ctx) {
        const { id, name } = await ctx.dataSources.spaceXApi.rocket(args.id);

        return {
          id,
          name,
        };
      },
    });

    t.field("ships", {
      type: nonNull(list("Ship")),
      async resolve(_root, _args, ctx) {
        const data = await ctx.dataSources.spaceXApi.ships();

        return data.map(({ id, name }) => ({
          id,
          name,
        }));
      },
    });
  },
});
