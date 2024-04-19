import { NavLink } from "react-router-dom";
import LinkStructure from "../../types/LinkStructure";
import { Variants, motion } from "framer-motion";
import { useState } from "react";


const dropdownMenuVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};


interface Props {
  navChildren: LinkStructure[] | null
  url: string
  title: string
}

const NavItem = ({navChildren = [], url, title}: Props) => {
  const [isMouseOverLink, setIsMouseOverLink] = useState(false);
  const [isMouseOverMenu, setIsMouseOverMenu] = useState(false);
  const isOpen = isMouseOverLink || isMouseOverMenu;

  
  return ( 
    <motion.div className={`nav-item ${navChildren?.length ? "dropdown-toggle" : ''}`}
      onMouseEnter={() => setIsMouseOverLink(true)}
      onMouseLeave={() => setTimeout(() => setIsMouseOverLink(false), 100)}
      // onClick={() => setIsOpen(!isOpen)}
      animate={isOpen ? "open" : "closed"}
    >
      <NavLink to={url} className="inria-sans-regular">
        {title}
        {navChildren?.length && 
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 }
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.5 }}
          >
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </motion.div>
        }
      </NavLink>
      
      {navChildren?.length ? 
        <motion.ul className="dropdown-menu"
        onMouseEnter={() => setIsMouseOverMenu(true)}
        onMouseLeave={() => setTimeout(() => setIsMouseOverMenu(false), 100)}
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05
              }
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3
              }
            }
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          {navChildren.map(link => (
            <motion.li className="dropdown-item" variants={dropdownMenuVariants}>
              <NavLink to={link.url} className="inria-sans-regular">
                {link.title}
              </NavLink>

            </motion.li>
          ))}
        </motion.ul> 
      : null}
    </motion.div>
   );
}
 
export default NavItem;