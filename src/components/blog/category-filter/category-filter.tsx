import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from '../../common';
import {
  Flex,
  Container,
  useMediaQuery,
  Divider,
  IconButton,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {
  CategoryFilterWrapper,
  ConetntWrapper,
  FilterLabel,
} from './category-filter.styles';
import { isBrowser, processCategoryTitle } from '../../../lib/utils';
import { width, colors, breakpoints } from '../../../styles/theme';
import { ContentfulBlogCategories } from '../../../types';

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

  const [showFilterMenu, setShowFilterMenu] = React.useState<boolean>(false);
  const [isLargerThan768] = useMediaQuery(`(min-width: ${breakpoints.md})`);

  function getActivePath() {
    if (!isBrowser) return;

    const path = window.location.pathname;
    const pathArray = path.split('/');

    return pathArray[pathArray.length - 1] === 'blog'
      ? 'all'
      : pathArray[pathArray.length - 1];
  }

  const activePath = getActivePath();

  return (
    <CategoryFilterWrapper>
      <Container maxW={width} height='inherit'>
        <ConetntWrapper>
          {isLargerThan768 ? (
            blogCategories.categories.map((category) => (
              <FilterLabel key={category.id}>
                <Link
                  to={
                    category.slug === 'all' ? '/blog' : `/blog/${category.slug}`
                  }
                  activeStyle={{ color: colors.accent.red }}>
                  {category.label}
                </Link>
              </FilterLabel>
            ))
          ) : (
            <>
              <Flex justifyContent='space-between' alignItems='center'>
                <FilterLabel>
                  <Link
                    to={activePath === 'all' ? '/blog' : `/blog/${activePath}`}
                    activeStyle={{ color: colors.accent.red }}>
                    {processCategoryTitle(activePath)}
                  </Link>
                </FilterLabel>
                <IconButton
                  size='lg'
                  aria-label='Open filter menu'
                  icon={
                    showFilterMenu ? (
                      <ChevronUpIcon w={12} h={12} />
                    ) : (
                      <ChevronDownIcon w={12} h={12} />
                    )
                  }
                  onClick={() => setShowFilterMenu((prev) => !prev)}
                />
              </Flex>
              {showFilterMenu && (
                <>
                  <Divider />
                  {blogCategories.categories.map((category) => (
                    <FilterLabel key={category.id}>
                      <Link
                        to={
                          category.slug === 'all'
                            ? '/blog'
                            : `/blog/${category.slug}`
                        }
                        activeStyle={{ color: colors.accent.red }}>
                        {category.label}
                      </Link>
                    </FilterLabel>
                  ))}
                </>
              )}
            </>
          )}
        </ConetntWrapper>
      </Container>
    </CategoryFilterWrapper>
  );
};

export default CategoryFilter;
