import * as React from 'react';
import Image from 'gatsby-image';
import { graphql, PageProps } from 'gatsby';
import { Grid } from '@chakra-ui/react';
import {
  Accordion,
  Box,
  DefaultLayout,
  Section,
  SEO,
  Services,
  SplitSection,
  Technologies,
} from '../../components';
import {
  ContentfulData,
  FluidImageProps,
  SectionModel,
  ServicesContentType,
  TechContentType,
} from '../../types';
import { gradients } from '../../styles/theme';
import { heroData, sectionData, askData } from './services.json';

export interface ServicePageProps {
  showcase: FluidImageProps;
  services: ContentfulData<SectionModel<ServicesContentType>>;
  technologies: ContentfulData<SectionModel<TechContentType>>;
}

export default function ServicesPage({
  location,
  data,
}: PageProps<ServicePageProps>) {
  const ctaRef = React.useRef(null);

  return (
    <DefaultLayout heroCtaRef={ctaRef}>
      <SEO pathname={location.pathname} title='Services' />
      <SplitSection
        ref={ctaRef}
        title={
          <>
            More than just code. We deliver <mark>successful</mark> outcomes.
          </>
        }
        subTitle={heroData.subTitle}
        ctaName={heroData.ctaName}
        ctaLink={heroData.ctaLink}
        colorScheme={gradients.purpleish}
        headingProps={{
          fontSize: {
            base: '4.9rem !important',
            sm: '5.3rem !important',
            lg: '5.9rem !important',
          },
          lineHeight: {
            base: '6rem !important',
            sm: '6.75rem !important',
            lg: '7.45rem !important',
          },
        }}
        rightPane={
          <Image
            fluid={data.showcase.childImageSharp.fluid}
            imgStyle={{ objectFit: 'contain' }}
            alt={heroData.name}
          />
        }
      />
      <Services
        data={data.services.edges[0].node}
        showBottom={false}
        showSubTitle={false}
      />
      {sectionData.map((entry) => (
        <Section key={entry.id} caption={entry.caption} title={entry.title}>
          <Grid
            width={{ base: '100%', sm: '85%', md: '80%' }}
            templateColumns='repeat(auto-fill, minmax(28rem, 1fr))'
            columnGap='calc(6vw + 3.45rem)'
            rowGap='2rem'
            mb='2rem'>
            {entry.data.map((item) => (
              <Box key={item.id} title={item.title} content={item.content} />
            ))}
          </Grid>
        </Section>
      ))}
      <Technologies data={data.technologies.edges[0].node} />
      <Section caption={askData.caption} title={askData.title}>
        <Accordion data={askData.data} />
      </Section>
    </DefaultLayout>
  );
}

export const query = graphql`
  query ServicesPage {
    showcase: file(relativePath: { eq: "service-hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    services: allContentfulLayoutServices {
      edges {
        node {
          title
          sectionModel {
            id
            title
            subTitle
            caption
            colorScheme
            variant
            ctaModal {
              ctaName
              ctaLink
              id
              content
            }
            sectionContent {
              title
              id
              contentType {
                ... on ContentfulSectionContentServiceCard {
                  id
                  ctaName
                  ctaLink
                  title
                  text
                }
              }
            }
          }
        }
      }
    }
    technologies: allContentfulLayoutTechnologies {
      edges {
        node {
          title
          id
          sectionModel {
            id
            title
            subTitle
            caption
            colorScheme
            variant
            ctaModal {
              id
              ctaName
              ctaLink
              content
              colorScheme
            }
            sectionContent {
              title
              id
              contentType {
                ... on ContentfulSectionContentTechCards {
                  id
                  title
                  techIcon {
                    id
                    alternateText
                    image {
                      title
                      file {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
