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

export interface ColorOptions {
  txtColor?: string;
  captionColor?: string;
  titleColor?: string;
  gradiant?: boolean;
  bgColor?: string;
}

export interface SectionProps {
  id?: string;
  component?: React.ElementType<any>;
  variant?: 'transparent' | 'background';
  options?: ColorOptions;
  colorScheme?: string;
  caption?: string;
  title?: string;
  subTitle?: string;
  contentPorps?: Record<string, unknown>;
  subTitleProps?: Record<string, unknown>;
  customTop?: Component;
  customBottom?: Component;
  children?: Component;
  wideContent?: boolean;
}

/**
 * Reusable component for bootstraping new sections. It renders a `section` tag by default.
 *
 * @param {Component} [component='section'] The component `element` to be rendered
 * @param {SectionProps['variant']} [variant='transparent'] Component variant, defaults to `transparent`
 * @param {SectionProps['options']} options An object used to pass aditional color options
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
    options,
    colorScheme,
    caption,
    title,
    subTitle,
    contentPorps,
    subTitleProps,
    customTop,
    customBottom,
    wideContent,
    children,
    ...restProps
  } = props;

  return (
    <SectionWrapper as={component} ref={ref} variant={variant} {...restProps}>
      <Container maxW={width}>
        <Background variant={variant} bgColor={options.bgColor}>
          <TopContent txtColor={options.txtColor}>
            {caption && (
              <Caption color={options.captionColor}>{caption}</Caption>
            )}
            {title && (
              <Heading
                color={options.titleColor || colorScheme}
                gradiant={options.gradiant ? 1 : 0}
                as='h2'>
                {title}
              </Heading>
            )}
            {subTitle && (
              <SubHeading top={customTop ? 1 : 0} {...subTitleProps}>
                {subTitle}
              </SubHeading>
            )}
            {customTop && <CustomTop>{customTop}</CustomTop>}
          </TopContent>
          {children && (
            <SectionContent wide={wideContent} {...contentPorps}>
              {children}
            </SectionContent>
          )}
          {customBottom && (
            <BottomContent iscontent={children ? 1 : 0}>
              {customBottom}
            </BottomContent>
          )}
        </Background>
      </Container>
    </SectionWrapper>
  );
});

Section.defaultProps = {
  component: `section`,
  variant: `transparent`,
  colorScheme: colors.text.dark,
  options: {
    bgColor: colors.background.lightGray,
    txtColor: colors.background.dark,
    captionColor: null,
    titleColor: null,
    gradiant: false,
  },
};

export default Section;
