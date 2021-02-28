import * as React from 'react';
import { useStaticQuery, graphql, PageProps } from 'gatsby';
import { Grid } from '@chakra-ui/react';
import {
  Box,
  CallToAction,
  DefaultLayout,
  Section,
  SEO,
  SplitSection,
  Technologies,
} from '../../../components';
import { ContentfulData, SectionModel, TechContentType } from '../../../types';
import { gradients } from '../../../styles/theme';
import {
  heroData,
  infoData,
  supportData,
  recommandSection,
} from './ecommerce.json';

export interface EcommerceQuery {
  technologies: ContentfulData<SectionModel<TechContentType>>;
}

export default function EcommercePage({ location }: PageProps) {
  const { technologies }: EcommerceQuery = useStaticQuery(graphql`
    query EcommercePage {
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
  `);

  const ctaRef = React.useRef(null);

  return (
    <DefaultLayout heroCtaRef={ctaRef}>
      <SEO pathname={location.pathname} title='eCommerce' />
      <SplitSection
        ref={ctaRef}
        wide
        caption={heroData.caption}
        title={
          <>
            Bring your <mark>products</mark> to the <mark>growing digital</mark>{' '}
            world and benefit.
          </>
        }
        subTitle={heroData.subTitle}
        colorScheme={gradients.purpleish}
        headingProps={{
          fontSize: {
            base: '4.9rem !important',
            sm: '5.3rem !important',
            lg: '5.9rem !important',
          },
          lineHeight: {
            base: '6rem !important',
            sm: '6.55rem !important',
            lg: '7rem !important',
          },
        }}
      />
      <Section
        variant='background'
        caption={infoData.caption}
        title={infoData.title}
        subTitle={infoData.subTitle}
        customBottom={
          <CallToAction
            content={infoData.more.content}
            ctaName={infoData.more.ctaName}
            ctaLink={infoData.more.ctaLink}
          />
        }
      />
      <Section caption={supportData.caption} title={supportData.title}>
        <Grid
          width={{ base: '100%', sm: '85%', md: '80%' }}
          templateColumns='repeat(auto-fill, minmax(28rem, 1fr))'
          columnGap='calc(6vw + 3.45rem)'
          rowGap='2rem'
          mb='2rem'>
          {supportData.data.map((item) => (
            <Box key={item.id} title={item.title} content={item.content} />
          ))}
        </Grid>
      </Section>
      <Technologies data={technologies.edges[0].node} />
      <Section
        caption={recommandSection.caption}
        title={recommandSection.title}
        customBottom={
          <CallToAction
            content={recommandSection.ctaInfo.content}
            ctaName={recommandSection.ctaInfo.ctaName}
            ctaLink={recommandSection.ctaInfo.ctaLink}
          />
        }
      />
    </DefaultLayout>
  );
}
