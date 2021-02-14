import * as React from 'react';
import CallToAction from '../../components/call-to-action';
import Section from '../../components/section';
import { useStaticQuery, graphql } from 'gatsby';
import { colors } from '../../styles/theme';
import { FluidImageProps } from '../../types';

const data = [
  {
    icon: 'idea',
    title: 'Idea',
    text:
      'Validate your idea through customer development and rapid prototyping',
  },
  {
    icon: 'develop',
    title: 'Develop',
    text: 'Build a scalable product with experienced product teams',
  },
  {
    icon: 'grow',
    title: 'Grow',
    text: 'Grow your product and sustain your business',
  },
  {
    icon: 'transform',
    title: 'Transform',
    text: `Become a pioneer and challenge the way you've always done it`,
  },
];

interface ImageDataProps {
  idea: FluidImageProps;
  develop: FluidImageProps;
  grow: FluidImageProps;
  transform: FluidImageProps;
}

const Phases = () => {
  const imgData: ImageDataProps = useStaticQuery(graphql`
    query {
      idea: file(relativePath: { eq: "idea.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      develop: file(relativePath: { eq: "develop.png" }) {
        childImageSharp {
          fluid(maxWidth: 120) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      grow: file(relativePath: { eq: "grow.png" }) {
        childImageSharp {
          fluid(maxWidth: 120) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      transform: file(relativePath: { eq: "transform.png" }) {
        childImageSharp {
          fluid(maxWidth: 120) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  return (
    <Section
      colorScheme={colors.accent.purple}
      caption='launch with confidence'
      title='Phases designed with a startup mindset'
      subTitle='We use a proven process to guide your product from early idea stages all the way thorugh design, development and marketing in order to achieve exponential growth.'>
      hello
    </Section>
  );
};

export default Phases;
