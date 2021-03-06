import * as React from 'react';
import { PageProps } from 'gatsby';
import { Grid } from '@chakra-ui/react';
import {
  Box,
  DefaultLayout,
  Section,
  SEO,
  SplitSection,
} from '../../components';
import { heroData, beliefsData, valuesData } from './about.json';
import { colors, gradients } from '../../styles/theme';

const AboutPage = ({ location }: PageProps) => {
  const ctaRef = React.useRef(null);

  return (
    <DefaultLayout heroCtaRef={ctaRef}>
      <SEO pathname={location.pathname} title='About' />
      <SplitSection
        ref={ctaRef}
        wide
        caption={heroData.caption}
        title={
          <>
            Have a look into our <mark>vision, culture</mark> and the beliefs
            that power the people at <mark>Nectbox</mark>
          </>
        }
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
        title={beliefsData.title}
        subTitle={beliefsData.subTitle}
        colorScheme={colors.accent.red}>
        <Grid
          width={{ base: '100%', sm: '85%', md: '80%' }}
          templateColumns='repeat(auto-fill, minmax(28rem, 1fr))'
          columnGap='calc(6vw + 3.45rem)'
          rowGap='2rem'
          mb='2rem'>
          {beliefsData.data.map((item) => (
            <Box key={item.id} title={item.title} content={item.content} />
          ))}
        </Grid>
      </Section>
      <Section
        title={valuesData.title}
        subTitle={valuesData.subTitle}
        colorScheme={colors.accent.purple}>
        <Grid
          width={{ base: '100%', sm: '85%', md: '80%' }}
          templateColumns='repeat(auto-fill, minmax(28rem, 1fr))'
          columnGap='calc(6vw + 3.45rem)'
          rowGap='2rem'
          mb='2rem'>
          {valuesData.data.map((item) => (
            <Box key={item.id} title={item.title} content={item.content} />
          ))}
        </Grid>
      </Section>
    </DefaultLayout>
  );
};

export default AboutPage;
