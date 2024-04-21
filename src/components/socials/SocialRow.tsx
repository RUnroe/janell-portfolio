import React from "react";
import pageData from "../../pageData";
import SocialIcon from "./SocialIcon";
import { IconComponentType } from "../../assets/icons/icons";
import { motion } from "framer-motion";

const SocialRow = () => {

  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.75,
        duration: 0.3,
        delayChildren: 0.5,
        staggerChildren: 0.2,
      }
    },
   
  }


  return ( 
    <div className="social-row">
      <hr className="center-bg-bar" />

      <motion.div className="socials-container" variants={variants} animate="animate" initial="initial">
        {pageData.contact.socials.map((socialInfo, index) => (
            <SocialIcon 
              title={`${socialInfo.title} - ${socialInfo.username}`}
              url={socialInfo.url}
              IconComponent={(socialInfo.iconComponent as unknown) as IconComponentType}
              key={`social-${socialInfo.title}-${index}`}
            />
        ))}
      </motion.div>
    </div>
   );
}
 
export default SocialRow;