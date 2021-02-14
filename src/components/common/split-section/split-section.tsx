import * as React from 'react';
import { Button, Link } from '../../common';
import { Container, Flex } from '@chakra-ui/react';
import {
  SplitSectionWrapper,
  Heading,
  Content,
  Caption,
  SubHeading,
} from './split-section.styles';
import { width, gradients } from '../../../styles/theme';

export type Component = React.ReactNode | React.ElementType<any> | string;

export interface SplitSectionProps {
  colorScheme?: string;
  caption?: string;
  title?: Component | string;
  subTitle?: string;
  leftPane?: Component;
  rightPane?: Component;
  ctaLink?: string;
  ctaName?: string;
  customButton?: Component;
  invert?: boolean;
  headingProps?: Record<string, unknown>;
}

const SplitSection = React.forwardRef<HTMLElement, SplitSectionProps>(
  (props, ref) => {
    const {
      caption,
      title,
      subTitle,
      leftPane,
      rightPane,
      colorScheme,
      ctaLink,
      ctaName,
      customButton,
      invert,
      headingProps,
      ...restProps
    } = props;

    return (
      <SplitSectionWrapper ref={ref} {...restProps}>
        <Container maxW={width} p='0 1.6rem'>
          <Content contentPosition={invert}>
            <Flex className='left-pane'>
              {caption && <Caption>{caption}</Caption>}
              {title && (
                <Heading as='h1' scheme={colorScheme} {...headingProps}>
                  {title}
                </Heading>
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
  invert: false,
};

export default SplitSection;
