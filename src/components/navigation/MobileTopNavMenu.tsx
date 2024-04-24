import { motion, useCycle } from "framer-motion";
import { useRef } from "react";
import useDimensions from "../../hooks/useDimensions";
import { MenuToggle } from "./MenuToggle";
import { MenuItem } from "./MobileMenuItem";
import { navigationStructure } from "./TopNavMenu";
import React from "react";

const MobileTopNavMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);



  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };
  
  return (  
    <motion.nav 
    initial={false}
    animate={isOpen ? "open" : "closed"} //TODO: close when navigating to new page
    custom={height}
    ref={containerRef}
    className="mobile"
  >
    <motion.div className="background" variants={sidebar} />
      <motion.ul variants={variants}>
        {navigationStructure.map(navItem => {
          if(navItem.children && navItem.children.length) {
            return (
              <React.Fragment key={navItem.url}>
                <MenuItem navItem={navItem} key={navItem.url} />
                {navItem.children.map(nestedItem => (
                  <MenuItem navItem={nestedItem} key={`nested-${nestedItem.url}`} nested={true}/>
                ))}
              </React.Fragment>
            )
          }
          else return (
            <MenuItem navItem={navItem} key={navItem.url} />
          )
        })}
      </motion.ul>
    <MenuToggle toggle={() => toggleOpen()} />
  </motion.nav>
  );
}
 
export default MobileTopNavMenu;