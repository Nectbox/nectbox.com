import * as React from 'react';
import Code from './code';
import theme from 'prism-react-renderer/themes/dracula';
import { MDXProvider } from '@mdx-js/react';

const components = {
  h2: ({ children }) => <h2 style={{ color: 'red' }}>{children}</h2>,
  'p.inlineCode': (props) => <code {...props} style={{ color: 'blue' }} />,

  pre: ({ children: { props } }) => {
    if (props.mdxType === 'code') {
      return (
        <Code
          codeString={props.children.trim()}
          language={props.className && props.className.replace('language-', '')}
          theme={theme}
          {...props}></Code>
      );
    }
  },
};

export default function Markdown(props: React.FC<{}>) {
  return <MDXProvider components={components} {...props} />;
}
