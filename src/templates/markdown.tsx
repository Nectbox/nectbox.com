import Highlight, { defaultProps } from "prism-react-renderer"
import React from "react"

type NodeProps = {
  children: React.ReactNode
}

export const Bold = ({ children }: NodeProps) => <strong>{children}</strong>

export const Text = ({ children }: NodeProps) => (
  <p style={{ fontSize: "20px" }}>{children}</p>
)

export const Heading1 = ({ children }: NodeProps) => (
  <h1 style={{ fontSize: "35px" }}>{children}</h1>)

// export const Code = ({ children }: NodeProps) => {
//   console.log({ children });
//   return (
//     <code style={{ color: "red", fontSize: "40px" }}>{children}</code>

//   )
// }

export const TestingCode = (text, code) => (
  <Highlight {...defaultProps} code={text} language="jsx">
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
)

///! adding numbers 

export const Line = () => (
  <div style={{ display: "table-row" }}> </div>
)
export const LineNo = () => (
  <span style={{display:"table-cell", textAlign:"right", paddingRight:"1em", userSelect: "none", opacity:"0.5"}}></span>
)

export const Pre = () => (
  <pre style={{textAlign: "left", margin: "1em,0", padding:"0.5em", overflow:"scroll", border: "2px solid black"}}></pre>
)

export const LineContent = () =>(
  <span style={{display:"table-cell"}}></span>
)