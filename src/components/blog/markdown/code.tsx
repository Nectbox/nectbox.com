import styled from '@emotion/styled';
import Highlight, { defaultProps } from 'prism-react-renderer';

export const Pre = styled.pre`
  text-align: left;
  margin: 3rem 0;
  padding: 1.1rem;
  overflow: hidden;
  border-radius: 0.6rem;
`;

export const Line = styled.div`
  display: table-row;
`;

export const LineNumber = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

export const LineContent = styled.span`
  display: table-cell;
  padding-bottom: 0.1rem;
`;

const Code = ({ codeString, language, theme, ...props }) => (
  <Highlight
    {...defaultProps}
    theme={theme}
    code={codeString}
    language={language}
    {...props}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <Line key={i} {...getLineProps({ line, key: i })}>
            <LineNumber>{i + 1}</LineNumber>
            <LineContent>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </LineContent>
          </Line>
        ))}
      </Pre>
    )}
  </Highlight>
);

export default Code;
