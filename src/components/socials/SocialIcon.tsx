import { motion } from "framer-motion";
import { IconComponentType } from "../../assets/icons/icons";

interface Props {
  title: string,
  url: string,
  IconComponent: IconComponentType,
}

const SocialIcon = ({title, url, IconComponent}: Props) => {
  const variants = {
    initial: {
      scale: 0,
      opacity: 0,
      
    },
    animate: {
      scale: 1,
      opacity: 1,
      
    },
    
  }

  return ( 
    <motion.a 
      className="social-link"
      href={url} 
      title={title}
      target="_blank" 
      variants={variants}
      whileHover={{
        scale: 1.15,
      }}
    >
      <IconComponent className={"social-icon icon"} />
      {/* <img className={"social-icon icon"} src={iconComponent} /> */}
    </motion.a>
   );
}
 
export default SocialIcon;