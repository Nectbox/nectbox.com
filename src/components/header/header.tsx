import * as React from 'react';
import Link from '../link';
import Button from '../button';
import { Menu, MenuItem } from '../menu';
import { Image, Box } from '@chakra-ui/react';
import {
  HeaderSection,
  Wrapper,
  Navigation,
  NavList,
  NavItem,
} from './header.styles';
import Branding from '../../images/branding.png';

const Header = () => {
  return (
    <HeaderSection as='header'>
      <Wrapper maxW='1280px'>
        <Box display='flex' alignItems='center'>
          <Image htmlWidth='195px' objectFit='contain' src={Branding} />
          <Navigation>
            <NavList>
              <NavItem>
                <Menu
                  menuName='Phases'
                  isLink
                  to='/phases'
                  menuList={
                    <>
                      <MenuItem
                        title='Idea'
                        subTitle='Validate your idea thorugh prototyping and custumer feedback'
                        isLink
                        to='/phases#idea'
                      />
                      <MenuItem
                        title='Build'
                        subTitle='Develop in small cycles, measure customer feedback, and build the right product'
                        isLink
                        to='/phases#build'
                      />
                      <MenuItem
                        title='Scale'
                        subTitle='Improve quality of existing software and grow your product'
                        isLink
                        to='/phases#scale'
                      />
                      <MenuItem
                        title='Transform'
                        subTitle='Digital markets change quickly, adapt and challange the way you always have done it'
                        isLink
                        to='/phases#transform'
                      />
                    </>
                  }
                />
              </NavItem>
              <NavItem>
                <Menu
                  menuName='What we do'
                  isLink
                  to='/'
                  menuList={
                    <>
                      <MenuItem
                        title='Services'
                        subTitle='We help startups to build successful products using latest technologies on the market.'
                        isLink
                        to='/phases#idea'
                      />
                      <MenuItem
                        title='Our Work'
                        subTitle='Some of our projects and clients we got to work with.'
                        isLink
                        to='/phases#build'
                      />
                    </>
                  }
                />
              </NavItem>
              <NavItem>
                <Link to='/about'>About</Link>
              </NavItem>
              <NavItem>
                <Link to='/blog'>Blog</Link>
              </NavItem>
              <NavItem>
                <Link to='/contact'>Contact</Link>
              </NavItem>
            </NavList>
          </Navigation>
        </Box>

        <Button>Free consultation</Button>
      </Wrapper>
    </HeaderSection>
  );
};

export default Header;
