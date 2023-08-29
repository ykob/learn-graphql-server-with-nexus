import { extendType, list, nonNull, objectType } from "nexus";
import { context } from "../context.ts";

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
        return context.dataBase.articles.filter(
          (article) => !article.published
        );
      },
    });
  },
});
