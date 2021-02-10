import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { ChevronDownIcon } from '@chakra-ui/icons';

interface LinkProps {
  to: string;
  isExternal?: boolean;
  isMenu?: boolean;
}

const Link: React.FC<LinkProps> = (props) => {
  const { to, isExternal, isMenu, children, ...restProps } = props;

  const inheritFont = { fontSize: 'inherit' };

  return isExternal ? (
    <a
      href={to}
      target='_blank'
      rel='noopener noreferrer'
      style={inheritFont}
      {...restProps}>
      {children}
    </a>
  ) : (
    <GatsbyLink to={to} style={inheritFont} {...restProps}>
      {children}
      {isMenu && <ChevronDownIcon />}
    </GatsbyLink>
  );
};

export default Link;
