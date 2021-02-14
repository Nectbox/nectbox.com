import * as React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { Global } from '@emotion/react';
import { CSSReset } from '@chakra-ui/react';
import { ContentfulLayout } from '../../types';

import globalStyles from '../../styles/global';

const Main = styled.main`
  margin-top: 8rem;
`;

interface DefaultLayoutProps {
  heroCtaRef?: React.MutableRefObject<any>;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  const { heroCtaRef, children } = props;

  const data: ContentfulLayout = useStaticQuery(graphql`
    query LayoutQuery {
      defaultLayout: allContentfulLayout {
        nodes {
          contentModules {
            ctaLink
            ctaTitle
            title
            navigation {
              menues {
                title
                slug
                id
                megaMenu {
                  menuItems {
                    heading
                    subHeading
                    slug
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const headerData = data.defaultLayout.nodes[0].contentModules[0];

  return (
    <>
      <CSSReset />
      <Global styles={globalStyles} />
      <Header data={headerData} heroCtaRef={heroCtaRef} />
      <Main>{children}</Main>
      <Footer data={[]} />
    </>
  );
};

export default DefaultLayout;
