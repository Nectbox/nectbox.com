import * as React from 'react';
import { Section } from '../../common';
import {
  ContentWrapper,
  TechList,
  TechWrapper,
  Heading,
} from './technologies.styles';
import { gradients } from '../../../styles/theme';
import { SectionModel, TechContentType } from '../../../types';

export interface TechnologiesProps {
  data: SectionModel<TechContentType>;
}

const Technologies: React.FC<TechnologiesProps> = (props) => {
  const {
    variant,
    caption,
    title,
    subTitle,
    sectionContent,
  } = props.data.sectionModel;

  return (
    <Section
      variant={variant}
      caption={caption}
      title={title}
      subTitle={subTitle}>
      <ContentWrapper width={{ base: '100%', sm: '90%', lg: '80%' }}>
        {sectionContent.contentType.map((entry) => (
          <TechList key={entry.id}>
            <Heading as='h3' scheme={gradients.black}>
              {entry.title}
            </Heading>
            <TechWrapper>
              {entry.techIcon.map((icon) => (
                <img
                  key={icon.id}
                  src={icon.image.file.url}
                  alt={icon.alternateText}
                  loading='lazy'
                  decoding='async'
                />
              ))}
            </TechWrapper>
          </TechList>
        ))}
      </ContentWrapper>
    </Section>
  );
};

export default Technologies;
