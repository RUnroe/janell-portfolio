import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  containerClassName?: string,
  children: ReactNode,
  delayOffset?: number,
}

const AnimatedTextHighlight = ({containerClassName = '', children, delayOffset = 0} : Props) => {
  const variants = {
    hidden: {
      width: 0,
      transition: { delay: 0, ease: [0.1, 0.03, 0.515, 0.955], duration: 0.75 }
      // transition: { type: "spring", delay: 1, ease: "linear", duration: 0.5 }
    },
    visible: {
      width: "100%",
      transition: { delay: (0.6 + delayOffset), ease: [0.1, 0.03, 0.515, 0.955], duration: 0.75 }
      // transition: { type: "spring", delay: 1, ease: "linear", duration: 0.5 }
    }
  };

  return ( 
    <motion.div className={`text-highlight animated ${containerClassName}`}>
      {children}
      <motion.div 
        className="hightlight-block"
        
        variants={variants}
      ></motion.div>
    </motion.div>
   );
}
 
export default AnimatedTextHighlight;