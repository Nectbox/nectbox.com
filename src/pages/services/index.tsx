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

const sectionData = [
  {
    id: '1',
    title: 'Strategies to help your product move to digital',
    data: [
      {
        id: '1a',
        title: 'Product Strategy',
        content:
          'Give your product a vision to help your customers succeed and position yourself in the market.',
      },
      {
        id: '1b',
        title: 'Risk Assessment',
        content:
          'Become aware of risk factors for your product and safeguard your business from failure.',
      },
      {
        id: '1c',
        title: 'Market Validation',
        content:
          'Gather evidence to solve the right problem for the right people.',
      },
      {
        id: '1d',
        title: 'Prioritized Roadmap',
        content:
          'Tackle your most valuable opportunities first to create more value and growth.',
      },
    ],
  },
  {
    id: '2',
    title: 'Development to bring your product to market',
    data: [
      {
        id: '2a',
        title: 'Development Sprints',
        content:
          'Increase collaboration through a short feedback loop and frequent demos.',
      },
      {
        id: '2b',
        title: 'User Story Mapping',
        content:
          'More effective planning through an actionable product roadmap.',
      },
      {
        id: '2c',
        title: 'Automated Testing',
        content: 'Increase confidence and ship features faster.',
      },
      {
        id: '2d',
        title: 'Performance Testing',
        content: 'Create a scalable product that grows with your business.',
      },
      {
        id: '2e',
        title: 'Design Thinking',
        content:
          'Improve your business by approaching problems in new ways and help your customers more effectively.',
      },
      {
        id: '2f',
        title: 'Motion',
        content:
          'Improve engagement with interactive and intuitive user experiences.',
      },
    ],
  },
];

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
        subTitle="We create prototypes to validate the problem and the solution to the market you're trying to serve, develop scalable software to create value for your users, and create additional growth opportunities through continuous iteration."
        ctaName='Free consultation'
        ctaLink='free-consultation'
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
            alt='Launching a new product'
          />
        }
      />
      <Services
        data={data.services.edges[0].node}
        showBottom={false}
        showSubTitle={false}
      />
      {sectionData.map((entry) => (
        <Section key={entry.id} title={entry.title}>
          <Grid
            width={{ base: '100%', sm: '85%', md: '80%' }}
            templateColumns='repeat(auto-fill, minmax(28rem, 1fr))'
            columnGap='calc(6vw + 3.45rem)'
            rowGap='2rem'
            mb='2rem'>
            {entry.data.map((item, idx) => (
              <Box key={item.id} title={item.title} content={item.content} />
            ))}
          </Grid>
        </Section>
      ))}
      <Technologies data={data.technologies.edges[0].node} />
      <Section title='You ask. Nectbox answers.'>
        <Accordion />
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
