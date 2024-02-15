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

  export type CaseStudy = {
    id: string;
    status: string;
    publishedDate: string;
    slug: string;
    author: string;
    headline: string;
    customer: string;
    excerpt: string;
    caseContent: string;
    caseFeaturedImage: string;
    project_url: string;
  };
  
  export type Schema = {
    Sample_content: Article[];
    Sample_case_studies: CaseStudy[];
  };
  