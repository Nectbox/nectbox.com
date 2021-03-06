import Highlight, { defaultProps } from "prism-react-renderer";
import { Line, LineContent, LineNo, Pre } from "./code.styles";

const Code = ({ codeString, language, theme, ...props }) => (
  <Highlight  {...defaultProps} theme={theme} code={codeString} language={language}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <Line key={i} {...getLineProps({ line, key: i })}>
            <LineNo>{i + 1}</LineNo>
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

export default Code