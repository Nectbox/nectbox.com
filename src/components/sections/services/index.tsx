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
  showBottom?: boolean;
  showSubTitle?: boolean;
}

const Services: React.FC<ServicesProps> = (props) => {
  const {
    data: { sectionModel },
    showBottom,
    showSubTitle,
  } = props;

  return (
    <Section
      colorScheme={sectionModel.colorScheme}
      caption={sectionModel.caption}
      title={sectionModel.title}
      subTitle={showSubTitle && sectionModel.subTitle}
      bottom={
        showBottom && (
          <CallToAction
            content={sectionModel.ctaModal.content}
            ctaName={sectionModel.ctaModal.ctaName}
            ctaLink={sectionModel.ctaModal.ctaLink}
            colorScheme={sectionModel.colorScheme}
          />
        )
      }>
      <CardWrapper>
        {sectionModel.sectionContent.contentType.map((entry) => (
          <ServiceCard key={entry.id}>
            <Link to={`/${entry.ctaLink}`}>
              <Heading as='h3'>{entry.title}</Heading>
              <Description>{entry.text}</Description>
              <Action color={sectionModel.colorScheme} as='button'>
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

Services.defaultProps = {
  showBottom: true,
  showSubTitle: true,
};

export default Services;
