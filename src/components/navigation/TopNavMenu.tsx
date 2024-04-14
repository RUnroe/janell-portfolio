import LinkStructure from "../../types/LinkStructure";
import NavItem from "./NavItem";

const navigationStructure: LinkStructure[] = [
  {
    title: "Home",
    url: "/",
    children: null,
  },
  {
    title: "Experience",
    url: "/experience",
    children: [
      {
        title: "Directing",
        url: "/experience/directing",
        children: null,
      },
      {
        title: "Stage Managing",
        url: "/experience/stage-managing",
        children: null,
      },
      {
        title: "Acting",
        url: "/experience/acting",
        children: null,
      },
    ],
  },
  {
    title: "Resume",
    url: "/resume",
    children: null,
  },
  {
    title: "Contact",
    url: "/contact",
    children: null,
  },
]



const TopNavMenu = () => {
  return ( 
    <nav className="top-nav">
      {
        navigationStructure.map((link:LinkStructure) => (
          <NavItem title={link.title} url={link.url} navChildren={link.children}/>
        ))
      }
    </nav>
   );
}
 
export default TopNavMenu;