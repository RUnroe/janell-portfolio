import { motion } from "framer-motion";
import AnimatedCharacters from "./AnimatedCharacters";
import AnimatedTextHighlight from "./AnimatedTextHighlight";

interface Props {
  textList: Array<string>,
  hasHighlight?: boolean,
  headerClassName?: string,
  containerClassName?: string,
}

const AnimatedHeader = ({textList, hasHighlight = true, headerClassName, containerClassName}: Props) => {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };
  return ( 
    <motion.header 
      className={containerClassName}
      initial="hidden"
      animate="visible"
      // animate={replay ? "visible" : "hidden"}
      variants={container}
    >
      <h1 className={headerClassName}>
        {textList.map((text, index) => (
          hasHighlight ? 
          <AnimatedTextHighlight delayOffset={0.2 * index} key={`animated-header-${text}-${index}`}>
            <AnimatedCharacters type="span" text={text} key={`animated-header-${text}-${index}`} textStyle={"inria-sans-bold"}/>
          </AnimatedTextHighlight>
          : <AnimatedCharacters type="span" text={text} key={`animated-header-${text}-${index}`} textStyle={"inria-sans-bold"}/>
        ))}
      </h1>
      
    </motion.header>
   );
}
 
export default AnimatedHeader;