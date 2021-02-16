import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Section, CallToAction, Box } from '../../common';
import { Grid } from '@chakra-ui/react';
import {
  FixedImageProps,
  ValueOf,
  SectionModel,
  PhasesContentType,
} from '../../../types';

interface ImageDataProps {
  idea: FixedImageProps;
  develop: FixedImageProps;
  grow: FixedImageProps;
  transform: FixedImageProps;
}

interface PhasesProps {
  data: SectionModel<PhasesContentType>;
}

const Phases: React.FC<PhasesProps> = (props) => {
  const {
    caption,
    colorScheme,
    title,
    subTitle,
    ctaModal,
    sectionContent,
  } = props.data;

  const images: ImageDataProps = useStaticQuery(graphql`
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
      colorScheme={colorScheme}
      caption={caption}
      title={title}
      subTitle={subTitle}
      bottom={
        <CallToAction
          content={ctaModal.content}
          ctaName={ctaModal.ctaName}
          ctaLink={ctaModal.ctaLink}
          colorScheme={ctaModal.colorScheme}
        />
      }>
      <Grid
        width={{ base: '100%', sm: '85%', md: '80%' }}
        templateColumns='repeat(auto-fill, minmax(28rem, 1fr))'
        columnGap='calc(6vw + 3.45rem)'
        rowGap='4rem'
        mb='2rem'>
        {sectionContent.contentType.map((entry, idx) => {
          const [processedText] = renderRichText(entry.text)[0].props.children;

          return (
            <Box
              key={entry.id}
              title={entry.title}
              content={processedText}
              src={
                (images[entry.icon] as ValueOf<ImageDataProps>).childImageSharp
                  .fixed
              }
              withNumber
              number={idx + 1}
            />
          );
        })}
      </Grid>
    </Section>
  );
};

export default Phases;
