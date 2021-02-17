import * as React from 'react';
import { Section, CallToAction, Link } from '../../common';
import { ArrowRightIcon } from '@chakra-ui/icons';
import {
  ServiceCard,
  CardWrapper,
  Heading,
  Description,
  Action,
} from './services.styles';
import { SectionModel, ServicesContentType } from '../../../types';

export interface ServicesProps {
  data: SectionModel<ServicesContentType>;
}

const Services: React.FC<ServicesProps> = (props) => {
  const {
    title,
    caption,
    subTitle,
    colorScheme,
    ctaModal,
    sectionContent,
  } = props.data.sectionModel;

  return (
    <Section
      colorScheme={colorScheme}
      caption={caption}
      title={title}
      subTitle={subTitle}
      bottom={
        <CallToAction
          content={ctaModal.content}
          ctaName={ctaModal.ctaName}
          ctaLink={ctaModal.ctaLink}
          colorScheme={colorScheme}
        />
      }>
      <CardWrapper>
        {sectionContent.contentType.map((entry) => (
          <ServiceCard key={entry.id}>
            <Link to={`/${entry.ctaLink}`}>
              <Heading as='h3'>{entry.title}</Heading>
              <Description>{entry.text}</Description>
              <Action color={colorScheme} as='button'>
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
