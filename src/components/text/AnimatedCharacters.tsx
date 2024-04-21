//https://codesandbox.io/p/sandbox/framer-motion-responsive-text-animation-z7udk?file=%2Fsrc%2FAnimatedText.js%3A12%2C18
//Code by nathansearles (modified)


import { motion } from "framer-motion";
import ComponentWrapper from "../util/ComponentWrapper";

// Word wrapper
const Wrapper = (props:any) => {
  // We'll do this to prevent wrapping of words using CSS
  return <span className="word-wrapper">{props.children}</span>;
};

// Map API "type" vaules to JSX tag names
const tagMap: { [key: string]: string  } = {
  p: "p",
  h1: "h1",
  h2: "h2",
  span: "span",
};

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
interface Props {
  type: string,
  text: string,
  textStyle: string,
}
const AnimatedCharacters = (props: Props) => {
  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: "200%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
    }
  };

  //  Split each word of props.text into an array
  const splitWords = props.text.split(" ");

  // Create storage array
  const words: Array<Array<string>> = [];

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push("\u00A0");
  });

  // Get the tag name from tagMap
  const Tag = tagMap[props.type] as keyof JSX.IntrinsicElements;

  return (
    <ComponentWrapper tag={Tag}>
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {words[index].flat().map((element: string, index: number) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                    lineHeight: "1",
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    className={props.textStyle}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
    </ComponentWrapper>
  );
};

export default AnimatedCharacters;
