import { motion } from "framer-motion";
import AnimatedCharacters from "./AnimatedCharacters";
import AnimatedTextHighlight from "./AnimatedTextHighlight";
import ComponentWrapper from "../util/ComponentWrapper";

interface Props {
  textList: Array<string>,
  tag?: string,
  hasHighlight?: boolean,
  headerClassName?: string,
  containerClassName?: string,
}

const AnimatedHeader = ({textList, tag = "h1", hasHighlight = true, headerClassName, containerClassName}: Props) => {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

  const tagMap: { [key: string]: string  } = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
  };
   // Get the tag name from tagMap
   const Tag = tagMap[tag] as keyof JSX.IntrinsicElements;

  return ( 
    <motion.header 
      className={containerClassName}
      initial="hidden"
      animate="visible"
      // animate={replay ? "visible" : "hidden"}
      variants={container}
    >
      <ComponentWrapper tag={Tag} className={headerClassName}>
      {/* <h1 className={headerClassName}> */}
        {textList.map((text, index) => (
          hasHighlight ? 
          <AnimatedTextHighlight delayOffset={0.2 * index} key={`animated-header-${text}-${index}`}>
            <AnimatedCharacters type="span" text={text} key={`animated-header-${text}-${index}`} textStyle={"inria-sans-bold"}/>
          </AnimatedTextHighlight>
          : <AnimatedCharacters type="span" text={text} key={`animated-header-${text}-${index}`} textStyle={"inria-sans-bold"}/>
        ))}
      {/* </h1> */}
      </ComponentWrapper>
      
    </motion.header>
   );
}
 
export default AnimatedHeader;