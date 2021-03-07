import * as React from 'react';
import styled from '@emotion/styled';
import Header from '../common/header';
import Footer from '../common/footer';
import { graphql, useStaticQuery } from 'gatsby';
import { Global } from '@emotion/react';
import { CSSReset } from '@chakra-ui/react';
import { LayoutData } from '../../types';
import { CategoryFilter } from '../blog';

import globalStyles from '../../styles/global';

const Main = styled.main`
  margin-top: 8rem;
`;

interface DefaultLayoutProps {
  heroCtaRef?: React.MutableRefObject<any>;
  showFooterTop?: boolean;
  blog?: boolean;
  post?: boolean;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  const { heroCtaRef, showFooterTop, blog, children } = props;

  const data: LayoutData = useStaticQuery(graphql`
    query LayoutQuery {
      footerContent: allContentfulLayoutFooter {
        edges {
          node {
            id
            title
            description
            copyright
            contact
            socialMedia {
              slug
              id
              icon {
                title
                file {
                  url
                }
              }
            }
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
      {blog ? (
        <Header
          data={headerData}
          heroCtaRef={heroCtaRef}
          postHeader={<CategoryFilter />}
        />
      ) : (
        <Header data={headerData} heroCtaRef={heroCtaRef} />
      )}
      <Main>{children}</Main>
      <Footer data={footerData} showTop={showFooterTop} />
    </>
  );
};

DefaultLayout.defaultProps = {
  showFooterTop: true,
};

export default DefaultLayout;
