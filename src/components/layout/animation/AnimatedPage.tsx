import { motion } from "framer-motion";
import { ReactNode } from "react";
import { CmsPage } from "react-simple-cms";
import pageData from "../../../pageData";

interface Props {
  pageKey: string,
  children: ReactNode,
}

const AnimatedPage = ({pageKey, children}: Props) => {
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
      <CmsPage inEditMode={true} pageKey={pageKey} siteData={pageData}>
      {children}
      </CmsPage>
    </motion.main>

   );
}
 
export default AnimatedPage;