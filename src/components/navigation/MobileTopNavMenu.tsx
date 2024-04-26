import { motion } from "framer-motion";
import { useRef, useState } from "react";
import useDimensions from "../../hooks/useDimensions";
import { MenuToggle } from "./MenuToggle";
import { MenuItem } from "./MobileMenuItem";
import { navigationStructure } from "./TopNavMenu";
import React from "react";

const MobileTopNavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      height: height * 2 + 200,
      transition: {
        // clipPath: {delay: 0.2},
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      // height: 100,
      transition: {
        height: {delay: 0.5},
        delay: 0.25,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const screen = {
    open: {
      opacity: 0.1,
      transition: {

      }
    },
    closed: {
      opacity: 0,
      transition: {
        delay: 0.25,
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
    <>
    <motion.nav 
    initial={false}
    animate={isOpen ? "open" : "closed"}
    custom={height}
    ref={containerRef}
    className="mobile"
  >
    <motion.div className={`background ${ isOpen ? "pointerEvents" : "noPointerEvents" } `} variants={sidebar} />
      <motion.ul variants={variants} className={`${ isOpen ? "pointerEvents" : "noPointerEvents" } `}>
        {navigationStructure.map(navItem => {
          if(navItem.children && navItem.children.length) {
            return (
              <React.Fragment key={navItem.url} >
                <MenuItem navItem={navItem} key={navItem.url} closeMenu={() => setIsOpen(false)} />
                {navItem.children.map(nestedItem => (
                  <MenuItem navItem={nestedItem} key={`nested-${nestedItem.url}`} nested={true} closeMenu={() => setIsOpen(false)}/>
                ))}
              </React.Fragment>
            )
          }
          else return (
            <MenuItem navItem={navItem} key={navItem.url} closeMenu={() => setIsOpen(false)} />
          )
        })}
      </motion.ul>
    <MenuToggle toggle={() => toggleOpen()} />
  </motion.nav>

  <motion.div 
    className="screen" 
    onClick={() => setIsOpen(false)}
    variants={screen}
    initial={"closed"}
    animate={isOpen ? "open" : "closed"}
    style={{ pointerEvents: isOpen ? "auto" : "none" }}
    ></motion.div>
  </>
  );
}
 
export default MobileTopNavMenu;