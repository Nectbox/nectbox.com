import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { ChevronDownIcon } from '@chakra-ui/icons';

interface LinkProps {
  to: string;
  isExternal?: boolean;
  isMenu?: boolean;
  title?: string;
  style?: object;
  activeStyle?: object;
  className?: string;
  onClick?: () => void;
}

const Link: React.FC<LinkProps> = (props) => {
  const { to, isExternal, isMenu, className, children, ...restProps } = props;

  const style = { height: 'fit-content', fontSize: 'inherit' };

  return isExternal ? (
    <a
      href={to}
      target='_blank'
      rel='noopener noreferrer'
      style={style}
      className={className}
      {...restProps}>
      {children}
    </a>
  ) : (
    <GatsbyLink className={className} to={to} style={style} {...restProps}>
      {children}
      {isMenu && <ChevronDownIcon />}
    </GatsbyLink>
  );
};

export default Link;
