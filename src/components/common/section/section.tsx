import * as React from 'react';
import { Container } from '@chakra-ui/react';
import {
  SectionWrapper,
  SectionContentWrapper,
  Background,
  TopContent,
  BottomContent,
  Caption,
  Heading,
  SubHeading,
  CustomTop,
} from './section.styles';
import { width, colors } from '../../../styles/theme';

export type Component = React.ReactNode | React.ElementType<any> | string;
export interface SectionContentProps {
  wide?: boolean;
}

export const SectionContent: React.FC<SectionContentProps> = (props) => {
  const { wide, ...restProps } = props;

  return <SectionContentWrapper wide={wide ? 1 : 0} {...restProps} />;
};

SectionContent.defaultProps = {
  wide: false,
};

export interface BackgroundOptions {
  variant?: 'transparent' | 'background';
  bgColor?: string;
}

export interface ColorOptions {
  txtColor?: string;
  captionColor?: string;
  titleColor?: string;
  gradiant?: boolean;
}

export interface SectionProps extends BackgroundOptions, ColorOptions {
  component?: React.ElementType<any>;
  colorScheme?: string;
  top?: Component;
  bottom?: Component;
  caption?: string;
  title?: string;
  subTitle?: string;
  contentPorps?: Record<string, unknown>;
  children?: Component;
  wideContent?: boolean;
  reverseContent?: boolean;
}

/**
 * Reusable component for bootstraping new sections. It renders a `section` tag by default.
 *
 * @param {Component} [component='section'] The component `element` to be rendered
 * @param {SectionProps['variant']} [variant='transparent'] Component variant, defaults to `transparent`
 * @param {SectionProps['bgColor']} bgColor Component background color, defaults to `lightGray`
 * @param {SectionProps['txtColor']} txtColor Component color, defaults to `dark`
 * @param {SectionProps['colorScheme']} colorScheme Component general color scheme
 * @param {SectionProps['top']} top Used to override the top part of the component or to extand it
 * @param {SectionProps['caption']} caption Used to render a caption text
 * @param {SectionProps['title']} title Used to render a title for the component
 * @param {SectionProps['subTitle']} subTitle Used to render a sub-title for the component
 * @param {SectionProps['contentPorps']} contentProps Used to pass additional props to the wrapper element of the component children
 * @param {SectionProps['wideContent']} wideContent Used to change to `width` property of the component
 */
const Section = React.forwardRef<HTMLElement, SectionProps>((props, ref) => {
  const {
    component,
    variant,
    bgColor,
    txtColor,
    captionColor,
    titleColor,
    colorScheme,
    top,
    bottom,
    caption,
    title,
    subTitle,
    contentPorps,
    wideContent,
    gradiant,
    children,
    ...restProps
  } = props;

  return (
    <SectionWrapper as={component} ref={ref} variant={variant} {...restProps}>
      <Container maxW={width}>
        <Background variant={variant} bgColor={bgColor}>
          <TopContent txtColor={txtColor}>
            {caption && <Caption color={captionColor}>{caption}</Caption>}
            {title && (
              <Heading
                color={titleColor || colorScheme}
                gradiant={gradiant ? 1 : 0}
                as='h2'>
                {title}
              </Heading>
            )}
            {subTitle && <SubHeading top={top ? 1 : 0}>{subTitle}</SubHeading>}
            {top && <CustomTop>{top}</CustomTop>}
          </TopContent>
          <SectionContent wide={wideContent} {...contentPorps}>
            {children}
          </SectionContent>
          {bottom && <BottomContent>{bottom}</BottomContent>}
        </Background>
      </Container>
    </SectionWrapper>
  );
});

Section.defaultProps = {
  component: `section`,
  variant: `transparent`,
  bgColor: colors.background.lightGray,
  txtColor: colors.background.dark,
  captionColor: null,
  titleColor: null,
  gradiant: false,
  colorScheme: colors.text.dark,
};

export default Section;
