import * as React from 'react';
import { Button, Link } from '../../common';
import { Container, Flex, SpaceProps } from '@chakra-ui/react';
import {
  SplitSectionWrapper,
  Heading,
  Content,
  Caption,
  SubHeading,
} from './split-section.styles';
import { width, gradients } from '../../../styles/theme';
import { Component } from '../../../types';

export interface SplitSectionProps extends SpaceProps {
  colorScheme?: string;
  caption?: string;
  title?: Component | string;
  titleHTML?: string;
  subTitle?: string;
  leftPane?: Component;
  rightPane?: Component;
  ctaLink?: string;
  ctaName?: string;
  customButton?: Component;
  invert?: boolean;
  headingProps?: Record<string, unknown>;
  wide?: boolean;
  customWidth?: string;
}

const SplitSection = React.forwardRef<HTMLDivElement, SplitSectionProps>(
  (props, ref) => {
    const {
      caption,
      title,
      titleHTML,
      subTitle,
      leftPane,
      rightPane,
      colorScheme,
      ctaLink,
      ctaName,
      customButton,
      invert,
      wide,
      headingProps,
      customWidth,
      ...restProps
    } = props;

    return (
      <SplitSectionWrapper as='section' ref={ref} {...restProps}>
        <Container maxW={customWidth || width} p='0 1.6rem'>
          <Content contentposition={invert ? 1 : 0} contentwide={wide ? 1 : 0}>
            <Flex className='left-pane'>
              {caption && <Caption>{caption}</Caption>}
              {title && (
                <Heading as='h1' scheme={colorScheme} {...headingProps}>
                  {title}
                </Heading>
              )}
              {titleHTML && (
                <Heading
                  as='h1'
                  dangerouslySetInnerHTML={{ __html: titleHTML }}
                  scheme={colorScheme}
                  {...headingProps}
                />
              )}
              {subTitle && <SubHeading>{subTitle}</SubHeading>}
              <Flex className='button-wrapper'>
                {ctaName && (
                  <Button color={colorScheme}>
                    <Link to={`/${ctaLink}`}>{ctaName}</Link>
                  </Button>
                )}
                {customButton && customButton}
              </Flex>
              {leftPane && leftPane}
            </Flex>
            <Flex className='right-pane'>{rightPane}</Flex>
          </Content>
        </Container>
      </SplitSectionWrapper>
    );
  }
);

SplitSection.defaultProps = {
  colorScheme: gradients.purple,
  customWidth: null,
  titleHTML: null,
  invert: false,
  wide: false,
};

export default SplitSection;
