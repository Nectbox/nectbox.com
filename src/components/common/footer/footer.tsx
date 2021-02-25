import * as React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { Section, Button, Link } from '../';
import { Divider, Flex } from '@chakra-ui/react';
import {
  NavigationWrapper,
  FooterContent,
  CompanyDetails,
  Description,
  Contact,
  NavigationList,
  NavigationListTitle,
  NavigationListItem,
  SocialMediaWrapper,
  Copyright,
} from './footer.styles';
import { FixedImageProps, FooterModule } from '../../../types';

interface BrandingProps {
  branding: FixedImageProps;
}

interface FooterProps {
  data: FooterModule;
  showTop: boolean;
}

const Footer: React.FC<FooterProps> = (props) => {
  const { showTop, data } = props;
  const {
    navigation,
    sectionModel,
    socialMedia,
    description,
    contact,
    copyright,
  } = data;

  const { branding }: BrandingProps = useStaticQuery(graphql`
    query {
      branding: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

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
      <Flex flexFlow='column' flexGrow={1} px={10}>
        <Divider />
        <FooterContent>
          <CompanyDetails>
            <Image fixed={branding.childImageSharp.fixed} alt={description} />
            <Description>{description}</Description>
            <Contact color={sectionModel.textColor}>
              <Link to={`mailto:${contact}`} isExternal>
                {contact}
              </Link>
            </Contact>
            <SocialMediaWrapper>
              {socialMedia.map((media) => (
                <Link key={media.id} to={media.slug} isExternal>
                  <img
                    src={media.icon.file.url}
                    alt={media.icon.title}
                    loading='lazy'
                    decoding='async'
                  />
                </Link>
              ))}
            </SocialMediaWrapper>
          </CompanyDetails>
          <NavigationWrapper color={sectionModel.textColor}>
            {navigation.menues.map((menu) => (
              <NavigationList key={menu.id}>
                <NavigationListTitle>{menu.title}</NavigationListTitle>
                {menu.megaMenu.menuItems.map((item) => (
                  <NavigationListItem key={item.id}>
                    <Link to={`/${item.slug || ''}`}>{item.heading}</Link>
                  </NavigationListItem>
                ))}
              </NavigationList>
            ))}
          </NavigationWrapper>
        </FooterContent>
        <Copyright color={sectionModel.textColor}>{copyright}</Copyright>
      </Flex>
    </Section>
  );
};

export default Footer;
