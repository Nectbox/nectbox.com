import * as React from 'react';
import Section from '../../components/section';
import Link from '../../components/link';
import CallToAction from '../../components/call-to-action';
import {
  ServiceCard,
  CardWrapper,
  Heading,
  Description,
  Action,
} from './services.styles';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { colors } from '../../styles/theme';

// MOCK data
// TBD: Adding the date to contentful
const data = [
  {
    id: '1',
    title: 'JAMstack websites',
    text:
      'Get your website an unfair advantage in SERP rankings. We build JAMstack websites with battle-tested SSG technologies and most popular headless CMS.',
    ctaLink: 'services/jamstack-website',
    ctaName: 'JAMstack',
  },
  {
    id: '2',
    title: 'Progressive Web Applications',
    text: `PWAs are offering the
    best of Native Applications and Web technology at your users 
    fingertips. Build a fast and scalable web application.`,
    ctaLink: 'services/progressive-web-app',
    ctaName: 'PWAs',
  },
  {
    id: '3',
    title: 'eCommerce',
    text:
      'The first step in reaching new customers or gaining visibility for your brand starts with your personalized and performant store for your audience.',
    ctaLink: 'services/ecommerce',
    ctaName: 'eCommerce',
  },
];

const Services = () => {
  return (
    <Section
      colorScheme={colors.accent.red}
      caption='Launch your product'
      title='What can Nectbox do for you?'
      subTitle="We create prototypes to validate the problem and the solution to the market you're trying to serve, build scalable software to create value for your users, and create additional growth opportunities through continuous iteration."
      bottom={
        <CallToAction
          content='Want to find out more about how we can help you?'
          ctaName='Services'
          ctaLink='services'
          colorScheme={colors.accent.red}
        />
      }>
      <CardWrapper>
        {data.map((entry) => (
          <ServiceCard key={entry.id}>
            <Link to={`/${entry.ctaLink}`}>
              <Heading as='h3'>{entry.title}</Heading>
              <Description>{entry.text}</Description>
              <Action color={colors.accent.red} as='button'>
                Read more about {entry.ctaName}
                <ArrowRightIcon />
              </Action>
            </Link>
          </ServiceCard>
        ))}
      </CardWrapper>
    </Section>
  );
};

export default Services;
