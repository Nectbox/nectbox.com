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

export type ValueOf<T> = T extends any[] ? T[number] : T[keyof T];
