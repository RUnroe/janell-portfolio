import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode,
}

const AnimatedPage = ({children}: Props) => {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    }
  }

  return ( 
    <motion.main initial={"initial"} animate={"animate"} exit={"exit"} variants={variants}>
      {children}
    </motion.main>

   );
}
 
export default AnimatedPage;