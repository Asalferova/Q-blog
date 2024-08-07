export interface IBaseField {
  id: string;
  createdAt: string;
}

export interface IArticleCard extends IBaseField {
  title: string;
  preview: string;
  image: string;
  description: string;
}

export interface IFullArticle extends IArticleCard {
  content: string;
}
