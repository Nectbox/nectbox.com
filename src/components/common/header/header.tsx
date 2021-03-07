import * as React from 'react';
import Image from 'gatsby-image';
import Link from '../link';
import Button from '../button';
import MobileNavigation from './mobile-navigation';
import { graphql, useStaticQuery } from 'gatsby';
import { Menu, MenuItem } from '../menu';
import { Box, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
  HeaderSection,
  MainHeader,
  Wrapper,
  Navigation,
  BurgerMenu,
  NavList,
  NavItem,
} from './header.styles';
import { width } from '../../../styles/theme';
import { FixedImageProps, HeaderModule, Component } from '../../../types';

interface HeaderProps {
  data: HeaderModule;
  heroCtaRef: React.MutableRefObject<any>;
  preHeader?: Component;
  postHeader?: Component;
}

interface BrandingProps {
  branding: FixedImageProps;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { branding }: BrandingProps = useStaticQuery(graphql`
    query {
      branding: file(relativePath: { eq: "branding.png" }) {
        childImageSharp {
          fixed(width: 195) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const { data, heroCtaRef, preHeader, postHeader } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showButton, setShowButton] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleCta = () => {
      let bottomOffset = heroCtaRef?.current?.getBoundingClientRect().bottom;

      if (heroCtaRef) {
        if (bottomOffset < 65) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      } else {
        setShowButton(true);
      }
    };

    window.addEventListener('scroll', handleCta, { passive: true });

    return () => window.removeEventListener('scroll', handleCta);
  }, [showButton]);

  return (
    <HeaderSection as='header'>
      {preHeader && preHeader}
      <MainHeader>
        <Wrapper maxW={width}>
          <Box display='flex' alignItems='center'>
            <Link to='/' title={data.title}>
              <Image
                fixed={branding.childImageSharp.fixed}
                alt='Nectbox branding'
              />
            </Link>

            <Navigation>
              <NavList>
                {data.navigation.menues.map((menu) =>
                  menu.megaMenu ? (
                    <NavItem key={menu.id}>
                      <Menu
                        menuName={menu.title}
                        isLink={menu.slug ? true : false}
                        to={`/${menu.slug}`}
                        menuList={
                          <>
                            {menu.megaMenu.menuItems.map((item) => (
                              <MenuItem
                                key={item.id}
                                title={item.heading}
                                subTitle={item.subHeading}
                                isLink={item.slug ? true : false}
                                to={`/${item.slug}`}
                              />
                            ))}
                          </>
                        }
                      />
                    </NavItem>
                  ) : (
                    <NavItem key={menu.id}>
                      <Link to={`/${menu.slug}`}>{menu.title}</Link>
                    </NavItem>
                  )
                )}
              </NavList>
            </Navigation>
          </Box>

          <Box display='flex' alignItems='center'>
            <BurgerMenu
              spacing={showButton ? 1 : 0}
              size='lg'
              variant='unstyled'
              aria-label='Mobile menu navigation'
              icon={<HamburgerIcon w={12} h={12} />}
              onClick={onOpen}
            />
            <MobileNavigation
              data={data.navigation.menues}
              isOpen={isOpen}
              onClose={onClose}
            />
            {showButton && (
              <Button className='consultation'>
                <Link to={`/${data.ctaLink}`}>{data.ctaTitle}</Link>{' '}
              </Button>
            )}
          </Box>
        </Wrapper>
      </MainHeader>
      {postHeader && postHeader}
    </HeaderSection>
  );
};

Header.defaultProps = {
  preHeader: null,
  postHeader: null,
};

export default Header;
