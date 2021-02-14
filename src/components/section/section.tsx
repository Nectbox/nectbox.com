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
} from './section.styles';
import { width, colors } from '../../styles/theme';

export interface BackgroundOptions {
  variant?: 'transparent' | 'background';
  bgColor?: string;
}

export interface SectionProps extends BackgroundOptions {
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

export interface SectionContentProps {
  wide?: boolean;
  reverse?: boolean;
}

type Component = React.ReactNode | React.ElementType<any> | string;

export const SectionContent: React.FC<SectionContentProps> = (props) => {
  const { wide, reverse, ...restProps } = props;

  return <SectionContentWrapper wide={wide} {...restProps} />;
};

SectionContent.defaultProps = {
  wide: false,
  reverse: false,
};

const Section = React.forwardRef<HTMLElement, SectionProps>((props, ref) => {
  const {
    variant,
    bgColor,
    colorScheme,
    top,
    bottom,
    caption,
    title,
    subTitle,
    contentPorps,
    wideContent,
    reverseContent,
    children,
    ...restProps
  } = props;

  return (
    <SectionWrapper ref={ref} {...restProps}>
      <Container maxW={width}>
        <Background variant={variant} bgColor={bgColor}>
          <TopContent>
            {caption && <Caption>{caption}</Caption>}
            {title && (
              <Heading color={colorScheme} as='h2'>
                {title}
              </Heading>
            )}
            {subTitle && <SubHeading>{subTitle}</SubHeading>}
            {top && <div>{top}</div>}
          </TopContent>
          <SectionContent
            wide={wideContent}
            reverse={reverseContent}
            {...contentPorps}>
            {children}
          </SectionContent>
          {bottom && <BottomContent>{bottom}</BottomContent>}
        </Background>
      </Container>
    </SectionWrapper>
  );
});

Section.defaultProps = {
  variant: `transparent`,
  bgColor: colors.background.lightGray,
  colorScheme: colors.text.dark,
};

export default Section;
