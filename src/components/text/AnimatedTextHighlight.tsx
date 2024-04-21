import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  containerClassName?: string,
  children: ReactNode,
  delayOffset?: number,
}

const AnimatedTextHighlight = ({containerClassName = '', children, delayOffset = 0} : Props) => {
  //Delay added this way to try to accomodate for title text width calculation time. 
  //The title text width starts larger than it needs to be. It gets adjusted, but this highlight-block takes the first value, so it extends too far
  const highlightDelay = 200; //ms
  const [showHighlight, setShowHighlight] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowHighlight(true);
    }, highlightDelay)
  }, []);

  let variants = {
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
      {showHighlight ? 
      <motion.div 
        className="hightlight-block"
        
        variants={variants}
      ></motion.div>
      : null}
    </motion.div>
   );
}
 
export default AnimatedTextHighlight;