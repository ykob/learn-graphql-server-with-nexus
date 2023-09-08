export interface Article {
  id: number;
  title: string;
  body: string;
  published: boolean;
}

export interface Database {
  articles: Article[];
}

export const database: Database = {
  articles: [
    {
      id: 1,
      title: "Nexus",
      body: "...",
      published: false,
    },
  ],
};
