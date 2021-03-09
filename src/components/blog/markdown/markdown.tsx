import * as React from 'react';
import Code from './code';
import theme from 'prism-react-renderer/themes/oceanicNext';
import { Link as GatsbyLink } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import {
  BigHeading,
  NormalText,
  InlineCode,
  List,
  ListItem,
  OrderList,
} from '../../../styles/text';
import { LinkIcon } from '@chakra-ui/icons';
import { Link } from '../../common';
import { generateAnchorId, isBrowser } from '../../../lib/utils';

const components = {
  h2: ({ children }) => {
    const browserHref = isBrowser ? window.location.pathname : null;
    const anchorText = generateAnchorId(children);

    return (
      <BigHeading id={anchorText}>
        {children}
        <Link to={`${browserHref}#${anchorText}`}>
          <LinkIcon ml='1.25rem' />
        </Link>
      </BigHeading>
    );
  },
  p: (props) => <NormalText {...props} />,
  'p.inlineCode': (props) => <InlineCode {...props} />,
  pre: ({ children: { props } }) => {
    if (props.mdxType === 'code') {
      return (
        <Code
          codeString={props.children.trim()}
          language={props.className && props.className.replace('language-', '')}
          theme={theme}
          {...props}
        />
      );
    }
  },
  ul: (props) => <List {...props} />,
  ol: (props) => <OrderList {...props} />,
  li: (props) => <ListItem {...props} />,
};

export default function Markdown(props: React.FC<{}>) {
  return <MDXProvider components={components} {...props} />;
}
