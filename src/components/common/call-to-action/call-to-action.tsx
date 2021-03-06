import * as React from 'react';
import Button from '../button';
import Link from '../link';
import { CtaWrapper, Content } from './call-to-action.styles';

export interface CtaProps {
  colorScheme?: string;
  content: string;
  ctaName: string;
  ctaLink: string;
}

const CallToAction: React.FC<CtaProps> = (props) => {
  const { colorScheme, content, ctaName, ctaLink, ...restProps } = props;

  return (
    <CtaWrapper {...restProps}>
      {content && <Content>{content}</Content>}
      <Button color={colorScheme}>
        <Link to={`/${ctaLink}`}>{ctaName}</Link>
      </Button>
    </CtaWrapper>
  );
};

export default CallToAction;
