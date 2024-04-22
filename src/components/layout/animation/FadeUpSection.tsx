import { motion } from "framer-motion";
import { ReactNode } from "react";


interface Props {
  sectionClassName?: string,
  delay?: number,
  children: ReactNode,
}


const FadeUpSection = ({sectionClassName = "", delay = 0, children}: Props) => {
  const initial = {
    y: "50%",
    opacity: 0,
  }

  const animate = {
    y: 0,
    opacity: 1,
  }

  const transition = {
    duration: 0.75,
    delay: delay,
    opacity: {
      delay: (delay + 0.35),
      duration: 0.7
    }
  }

  return (  
  <motion.section className={sectionClassName} animate={animate} initial={initial} transition={transition} exit={initial}>
    {children}
  </motion.section>

  );
}
 
export default FadeUpSection;