import * as React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from '../../common';
import { Flex, Container, Stack } from '@chakra-ui/react';
import { width, colors } from '../../../styles/theme';
import { ContentfulBlogCategories } from '../../../types';

export const CategoryFilterWrapper = styled(Stack)`
  background: ${colors.background.lightGray};
  height: 4.8rem;
  margin-top: 0 !important;
`;

export const FilterLabel = styled.p`
  font-weight: 400;
  color: ${colors.text.lightGray};
  padding: 1rem 2rem;
  cursor: pointer;

  :hover {
    color: ${colors.text.gray};
  }
`;

const CategoryFilter: React.FC = () => {
  const { blogCategories }: ContentfulBlogCategories = useStaticQuery(graphql`
    query CategoriesQuery {
      blogCategories: contentfulBlogCategories {
        categories {
          id
          label
          slug
        }
      }
    }
  `);

  return (
    <CategoryFilterWrapper>
      <Container maxW={width} height='inherit'>
        <Flex
          alignItems='center'
          justifyContent='space-evenly'
          height='inherit'>
          {blogCategories.categories.map((category) => (
            <FilterLabel key={category.id}>
              <Link
                to={
                  category.slug === 'all' ? '/blog' : `/blog/${category.slug}`
                }
                activeStyle={{ color: colors.accent.red }}>
                {category.label}
              </Link>
            </FilterLabel>
          ))}
        </Flex>
      </Container>
    </CategoryFilterWrapper>
  );
};

export default CategoryFilter;
