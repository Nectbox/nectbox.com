import { MDXProvider } from "@mdx-js/react";
import theme from "prism-react-renderer/themes/dracula";
import React from "react";
import { Code } from "../components";


const components = {
  h2: ({children})=>(
    <h2 style={{color: "red"}}>{children}</h2>
  ),
  "p.inlineCode": props =>(
    <code {...props} style={{color:"blue"}}/>
  ),  
 
  pre: ({children: {props}}) => {
    if(props.mdxType === "code"){
      return (
        <Code codeString={props.children.trim()}
        language={
          props.className && props.className.replace('language-', "")
        } theme={theme}
        {...props}
        >

        </Code>
      )
    }
  }
    
}
export const wrapperElement = ({element}) =>{
  return (
    <MDXProvider components={components}>
      {element}
    </MDXProvider>
  )
}