import { extendType, list, nonNull, objectType, stringArg } from "nexus";

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
      resolve(_root, _args, ctx) {
        return ctx.dataBase.articles.filter((article) => !article.published);
      },
    });
  },
});

export const ArticleMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createDraft", {
      type: nonNull("Article"),
      args: {
        title: nonNull(stringArg()),
        body: nonNull(stringArg()),
      },
      resolve(_root, args, ctx) {
        const draft = {
          id: ctx.dataBase.articles.length + 1,
          title: args.title,
          body: args.body,
          published: false,
        };
        ctx.dataBase.articles.push(draft);
        return draft;
      },
    });
  },
});
