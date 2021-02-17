import * as React from 'react';
import Section from '../section';
import Button from '../button';
import Link from '../link';
import { Divider } from '@chakra-ui/react';
import { FooterModule } from '../../../types';

interface FooterProps {
  data: FooterModule;
}

const Footer: React.FC<FooterProps> = (props) => {
  const { navigation, sectionModel } = props.data;

  return (
    <Section
      component={sectionModel.component}
      variant={sectionModel.variant}
      bgColor={sectionModel.backgroundColor}
      txtColor={sectionModel.textColor}
      titleColor={sectionModel.titleColor}
      gradiant={sectionModel.isGradiant}
      title={sectionModel.title}
      subTitle={sectionModel.subTitle}
      top={
        <Button color={sectionModel.ctaModal.colorScheme}>
          <Link to={`/${sectionModel.ctaModal.ctaLink}`}>
            {sectionModel.ctaModal.ctaName}
          </Link>
        </Button>
      }>
      <Divider />
    </Section>
  );
};

export default Footer;
