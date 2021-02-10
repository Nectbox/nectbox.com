import * as React from 'react';
import Link from '../link';
import { Text } from '@chakra-ui/react';
import { MenuWrapper, List, MenuItemWrapper } from './menu.styles';

export interface MenuItemProps {
  title: string;
  subTitle?: string;
  isLink?: boolean;
  to?: string;
}

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { title, subTitle, isLink, to } = props;

  return (
    <MenuItemWrapper className='item'>
      {isLink && to ? (
        <Link to={to}>
          <Text as='p'>{title}</Text>
          <Text as='small'>{subTitle}</Text>
        </Link>
      ) : (
        <>
          <Text as='p'>{title}</Text>
          <Text as='small'>{subTitle}</Text>
        </>
      )}
    </MenuItemWrapper>
  );
};

export interface MenuProps {
  menuName: string | React.ReactNode;
  menuList: React.ReactNode;
  isLink?: boolean;
  to?: string;
  linkProps?: Record<string, any>;
}

export const Menu: React.FC<MenuProps> = (props) => {
  const { menuName, menuList, isLink, to, linkProps, ...restProps } = props;

  return (
    <MenuWrapper {...restProps}>
      <Text style={{ fontSize: 'inherit' }}>
        {isLink && to ? (
          <Link to={to} isMenu {...linkProps}>
            {menuName}
          </Link>
        ) : (
          menuName
        )}
      </Text>
      <List>{menuList}</List>
    </MenuWrapper>
  );
};
