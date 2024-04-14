import { Link } from "react-router-dom";
import LinkStructure from "../../types/LinkStructure";

interface Props {
  navChildren: LinkStructure[] | null
  url: string
  title: string
}


const NavItem = ({navChildren = [], url, title}: Props) => {
  return ( 
    <div className={`nav-item ${navChildren?.length && "dropdown-toggle"}`}>
      <Link to={url}>{title}</Link>
      {navChildren?.length ? 
        <ul className="dropdown-menu">
          {navChildren.map(link => (
            <li className="dropdown-item"><Link to={link.url}>{link.title}</Link></li>
          ))}
        </ul> 
      : null}
    </div>
   );
}
 
export default NavItem;