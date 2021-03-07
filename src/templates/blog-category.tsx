import * as React from 'react';
import { Grid } from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Card, DefaultLayout, Section } from '../components';
import { dimensions } from '../styles/theme';
import { AllMdxBlogPostData } from '../types';

export default function BlogCategory({
  data,
  pageContext,
}: PageProps<AllMdxBlogPostData, { category: string }>) {
  return (
    <DefaultLayout blog>
      <Section
        customWidth={dimensions.blogWidth}
        paddingTop='12.5rem'
        caption='category'
        title={pageContext.category}>
        <Grid
          width={{ base: '100%', sm: '85%', md: '80%' }}
          templateColumns='repeat(auto-fill, minmax(38rem, 1fr))'
          columnGap='calc(6vw + 3.45rem)'
          rowGap='4rem'
          mb='2rem'>
          {data.allMdx.edges.map((edge) => {
            const { frontmatter, id } = edge.node;

            return <Card key={id} data={frontmatter} />;
          })}
        </Grid>
      </Section>
    </DefaultLayout>
  );
}

export const pageQuery = graphql`
  query blogCategoryQuery($category: String) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            author
            description
            excerpt
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            id
            category
            keywords
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
