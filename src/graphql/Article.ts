import { extendType, list, nonNull, objectType } from "nexus";

export const Article = objectType({
  name: "Article",
  definition(t) {
    t.int("id"), t.string("title"), t.string("body"), t.boolean("published");
  },
});

export const ArticleQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("drafts", {
      type: nonNull(list("Article")),
      resolve() {
        return [{ id: 1, title: "Nexus", body: "...", published: false }];
      },
    });
  },
});
