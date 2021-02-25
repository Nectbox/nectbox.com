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

// Making interfaces to use node and generate slug/pages
export interface PageInput {
   path: string
   component: string
   layout?: string
   context: any
}

interface BoundActionCreators {
  createPage: (page: PageInput) => void
  deletePage: (page: PageInput ) => void
  createRedirect: (
    opts: {
      fromPath: string
      isPermanent: boolean
      redirectBrowser?: boolean
      toPath: string
    }
  ) => void
}

export type GatsbyCreatePages = (
  fns: {graphql: any; boundActionCreators: BoundActionCreators}
) => void


export type ValueOf<T> = T extends any[] ? T[number] : T[keyof T];
