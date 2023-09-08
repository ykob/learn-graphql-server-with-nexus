import {
  extendType,
  intArg,
  list,
  nonNull,
  objectType,
  stringArg,
} from "nexus";

export const Article = objectType({
  name: "Article",
  definition(t) {
    t.nonNull.int("id"),
      t.nonNull.string("title"),
      t.string("body"),
      t.nonNull.boolean("published");
  },
});

export const ArticleQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("draftArticles", {
      type: nonNull(list("Article")),
      resolve(_root, _args, ctx) {
        return ctx.database.articles.filter(
          (article) => article.published === false
        );
      },
    });

    t.field("publishedArticles", {
      type: list("Article"),
      resolve(_root, _args, ctx) {
        return ctx.database.articles.filter(
          (article) => article.published === true
        );
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
          id: ctx.database.articles.length + 1,
          title: args.title,
          body: args.body,
          published: false,
        };
        ctx.database.articles.push(draft);
        return draft;
      },
    });

    t.field("publish", {
      type: "Article",
      args: {
        draftId: nonNull(intArg()),
      },
      resolve(_root, args, ctx) {
        let draftToPublish = ctx.database.articles.find(
          (a) => a.id === args.draftId
        );

        if (!draftToPublish) {
          throw new Error(`Could not find draft with id ${args.draftId}`);
        }
        draftToPublish.published = true;
        return draftToPublish;
      },
    });
  },
});
