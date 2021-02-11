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
