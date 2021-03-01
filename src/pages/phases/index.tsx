import * as React from 'react';
import { PageProps } from 'gatsby';
import { Grid } from '@chakra-ui/react';
import {
  Box,
  CallToAction,
  DefaultLayout,
  Section,
  SEO,
  SplitSection,
} from '../../components';
import { colors, gradients } from '../../styles/theme';
import { heroData, phases, recommandSection } from './phases.json';

const PhasesPage = ({ location }: PageProps) => {
  const ctaRef = React.useRef(null);

  return (
    <DefaultLayout heroCtaRef={ctaRef}>
      <SEO pathname={location.pathname} title='Phases' />
      <SplitSection
        ref={ctaRef}
        wide
        title={
          <>
            We <mark>engineered</mark> a process that will help you to go from{' '}
            <mark>idea</mark> to a <mark>sucessful</mark> digital product.
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
      {phases.map((phase) => (
        <Section
          id={phase.name}
          variant={phase.variant as 'transparent' | 'background'}
          caption={phase.caption}
          title={phase.title}
          subTitle={phase.subTitle}
          colorScheme={colors.accent[phase.color]}>
          <Grid
            width={{ base: '100%', sm: '85%', md: '80%' }}
            templateColumns='repeat(auto-fill, minmax(28rem, 1fr))'
            columnGap='calc(6vw + 3.45rem)'
            rowGap='2rem'
            mb='2rem'>
            {phase.data.map((item) => (
              <Box key={item.id} title={item.title} content={item.content} />
            ))}
          </Grid>
        </Section>
      ))}
      <Section
        caption={recommandSection.caption}
        title={recommandSection.title}
        subTitle={recommandSection.subTitle}
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
};

export default PhasesPage;
