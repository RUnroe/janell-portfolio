import { motion } from "framer-motion";
import LinkStructure from "../../types/LinkStructure";
import { NavLink } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};


interface Props {
  navItem: LinkStructure,
  nested?: boolean,
  closeMenu: () => void,
}

export const MenuItem = ({navItem, nested=false, closeMenu}: Props) => {
  return (
    <motion.li
      variants={variants}
      className={nested ? "nested" : ""}
    >
      <NavLink to={navItem.url} onClick={() => closeMenu()}>
        <span className="inria-sans-regular">{navItem.title}</span>
      </NavLink>
    </motion.li>
  );
};
