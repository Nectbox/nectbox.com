import * as React from 'react';
import { Markdown } from './src/components';

export const wrapRootElement = ({ element }) => {
  return <Markdown>{element}</Markdown>;
};
