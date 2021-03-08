import { FixedObject, FluidObject } from 'gatsby-image';

export interface FixedImageProps {
  childImageSharp: {
    fixed: FixedObject;
  };
}

export interface FluidImageProps {
  childImageSharp: {
    fluid: FluidObject;
  };
}

export interface SiteMetadeta {
  site: {
    siteMetadata: {
      title: string;
      tagLine: string;
      description: string;
      siteUrl: string;
      author: string;
      twitter: string;
    };
  };
}

export interface AllMdxBlogPostData {
  allMdx: MdxBlogPostsData;
}

export interface MdxBlogPostsData {
  edges: Array<{
    node: {
      id: string;
      timeToRead: number;
      frontmatter: FormatterData;
      fields: {
        slug: string;
      };
    };
  }>;
}

export interface MdxBlogPostData {
  mdx: {
    body: string;
    timeToRead: number;
    frontmatter: FormatterData;
  };
}

export interface FormatterData {
  author: string;
  description: string;
  excerpt: string;
  slug: string;
  title: string;
  htmlTitle: string;
  date: string;
  id: string;
  keywords: string[];
  category: string;
  featuredImage: FluidImageProps;
}

// Making interfaces to use node and generate slug/pages
export interface PageInput {
  path: string;
  component: string;
  layout?: string;
  context: any;
}

export interface BoundActionCreators {
  createPage: (page: PageInput) => void;
  deletePage: (page: PageInput) => void;
  createRedirect: (opts: {
    fromPath: string;
    isPermanent: boolean;
    redirectBrowser?: boolean;
    toPath: string;
  }) => void;
}

export type GatsbyCreatePages = (fns: {
  graphql: any;
  boundActionCreators: BoundActionCreators;
}) => void;

export type Component = React.ReactNode | React.ElementType<any> | string;

export type ValueOf<T> = T extends any[] ? T[number] : T[keyof T];
