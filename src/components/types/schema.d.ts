export type Article = {
    id: string;
    status: string;
    publishedDate: string;
    slug: string;
    author: string;
    headline: string;
    kicker: string;
    excerpt: string;
    articleBody: string;
    tag: string;
    category: string;
    articleFeaturedImage: string;
  };
  
  export type Schema = {
    Sample_content: Article[];
  };
  