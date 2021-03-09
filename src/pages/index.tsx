import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import {
  Phases,
  Services,
  Hero,
  SEO,
  DefaultLayout,
  Technologies,
} from '../components';
import { HomepageData } from '../types';

export default function HomePage({ location, data }: PageProps<HomepageData>) {
  const ctaRef = React.useRef(null);

  const heroData = data.hero.edges[0].node;
  const servicesData = data.services.edges[0].node;
  const techData = data.technologies.edges[0].node;
  const phasesData = data.phases.edges[0].node;

  return (
    <DefaultLayout headerProps={{ heroCtaRef: ctaRef }}>
      <SEO pathname={location.pathname} title='Home' />
      <Hero data={heroData} ref={ctaRef} />
      <Services data={servicesData} />
      <Technologies data={techData} />
      <Phases data={phasesData} />
    </DefaultLayout>
  );
}

export const query = graphql`
  query HomePage {
    hero: allContentfulLayoutHero {
      edges {
        node {
          sectionModel {
            id
            caption
            subTitle
            ctaLink
            invertSection
          }
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
    phases: allContentfulLayoutPhases {
      edges {
        node {
          title
          id
          sectionModel {
            id
            caption
            title
            subTitle
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
              id
              title
              contentType {
                ... on ContentfulSectionContentPhaseCard {
                  id
                  title
                  icon
                  text {
                    raw
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
