import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Section, CallToAction, Box } from '../../common';
import { Grid } from '@chakra-ui/react';
import { colors } from '../../../styles/theme';
import { FixedImageProps, ValueOf } from '../../../types';

const data = [
  {
    id: '1',
    icon: 'idea',
    title: 'Idea',
    text:
      'You have an idea for a digital product - but you don’t know if it’s worth investing your time and resources. Does it solve a real problem? Is anyone willing to buy it? We’ll answer these questions and more while gaining an in-depth understanding of your users and your market.',
  },
  {
    id: '2',
    icon: 'develop',
    title: 'Develop',
    text:
      'Continuous feedback allows a business to iterate quickly and maximize their resources. Throughout the develop phase our team guides each business through a measurable agile process open for receiving feedback every two weeks.',
  },
  {
    id: '3',
    icon: 'grow',
    title: 'Grow',
    text:
      'Once launched, we define success metrics and a roadmap to grow your product. We align building a sustainable business with the needs of your customers to create value for everyone involved.',
  },
  {
    id: '4',
    icon: 'transform',
    title: 'Transform',
    text: `Become a pioneer and leverage a digital-first mindset. Map, understand, and reimagine the experiences of everyone who engages with your business; your customers, employees, vendors, and partners.`,
  },
];

interface ImageDataProps {
  idea: FixedImageProps;
  develop: FixedImageProps;
  grow: FixedImageProps;
  transform: FixedImageProps;
}

const Phases = () => {
  const imgData: ImageDataProps = useStaticQuery(graphql`
    query {
      idea: file(relativePath: { eq: "idea.png" }) {
        childImageSharp {
          fixed(height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      develop: file(relativePath: { eq: "develop.png" }) {
        childImageSharp {
          fixed(height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      grow: file(relativePath: { eq: "grow.png" }) {
        childImageSharp {
          fixed(height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      transform: file(relativePath: { eq: "transform.png" }) {
        childImageSharp {
          fixed(height: 160) {
            ...GatsbyImageSharpFixed
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
      subTitle='We use a proven process to guide your product from early idea stages all the way thorugh design, development and marketing in order to achieve exponential growth.'
      bottom={
        <CallToAction
          content='Wonder how each phase is designed to help you?'
          ctaName='See Phases'
          ctaLink='phases'
          colorScheme={colors.accent.purple}
        />
      }>
      <Grid
        width={{ base: '100%', sm: '85%', md: '80%' }}
        templateColumns='repeat(auto-fill, minmax(28rem, 1fr))'
        columnGap='calc(6vw + 3.45rem)'
        rowGap='4rem'
        mb='2rem'>
        {data.map((entry, idx) => (
          <Box
            key={entry.id}
            title={entry.title}
            content={entry.text}
            src={
              (imgData[entry.icon] as ValueOf<ImageDataProps>).childImageSharp
                .fixed
            }
            withNumber
            number={idx + 1}
          />
        ))}
      </Grid>
    </Section>
  );
};

export default Phases;
