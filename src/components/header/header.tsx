import * as React from 'react';
import Link from '../link';
import Button from '../button';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Menu, MenuItem } from '../menu';
import { width } from '../../styles/theme';
import { Box } from '@chakra-ui/react';
import { FixedImageProps, HeaderModule } from '../../types';
import {
  HeaderSection,
  Wrapper,
  Navigation,
  NavList,
  NavItem,
} from './header.styles';

interface HeaderProps {
  data: HeaderModule;
  heroCtaRef: React.MutableRefObject<any>;
}

interface BrandingProps {
  branding: FixedImageProps;
}

const Header: React.FC<HeaderProps> = ({ data, heroCtaRef }) => {
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

        {showButton && (
          <Button>
            <Link to={`/${data.ctaLink}`}>{data.ctaTitle}</Link>{' '}
          </Button>
        )}
      </Wrapper>
    </HeaderSection>
  );
};

export default Header;
