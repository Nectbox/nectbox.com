import * as React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { Global } from '@emotion/react';
import { CSSReset } from '@chakra-ui/react';
import { LayoutData } from '../../types';

import globalStyles from '../../styles/global';

const Main = styled.main`
  margin-top: 8rem;
`;

interface DefaultLayoutProps {
  heroCtaRef?: React.MutableRefObject<any>;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  const { heroCtaRef, children } = props;

  const data: LayoutData = useStaticQuery(graphql`
    query LayoutQuery {
      footerContent: allContentfulLayoutFooter {
        edges {
          node {
            id
            title
            navigation {
              menues {
                id
                title
                slug
                megaMenu {
                  menuItems {
                    id
                    slug
                    heading
                  }
                }
              }
            }
            sectionModel {
              id
              component
              variant
              colorScheme
              backgroundColor
              textColor
              titleColor
              isGradiant
              caption
              title
              subTitle
              ctaModal {
                id
                ctaName
                ctaLink
                colorScheme
                content
              }
            }
          }
        }
      }
      headerContent: allContentfulLayoutHeader {
        edges {
          node {
            id
            title
            ctaLink
            ctaTitle
            navigation {
              menues {
                id
                title
                slug
                megaMenu {
                  menuItems {
                    id
                    slug
                    heading
                    subHeading
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const headerData = data.headerContent.edges[0].node;
  const footerData = data.footerContent.edges[0].node;

  return (
    <>
      <CSSReset />
      <Global styles={globalStyles} />
      <Header data={headerData} heroCtaRef={heroCtaRef} />
      <Main>{children}</Main>
      <Footer data={footerData} />
    </>
  );
};

export default DefaultLayout;
