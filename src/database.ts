export interface Article {
  id: number;
  title: string;
  body: string;
  published: boolean;
}

export interface DataBase {
  articles: Article[];
}

export const dataBase: DataBase = {
  articles: [
    {
      id: 1,
      title: "Nexus",
      body: "...",
      published: false,
    },
  ],
};
