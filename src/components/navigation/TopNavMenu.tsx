import React from "react";
import LinkStructure from "../../types/LinkStructure";
import NavItem from "./NavItem";
import MobileTopNavMenu from "./MobileTopNavMenu";
import pageData from "../../pageData";
import toFriendlyName from "../../util/text/toFriendlyName";

export const navigationStructure: LinkStructure[] = [
  {
    title: "Home",
    url: "/",
    children: null,
  },
  {
    title: "Experience",
    url: "/experience",
    children: Object.keys(pageData.experience).map((pageName) => ({
      title: toFriendlyName(pageName),
      url: `/experience/${pageName}`,
      children: null,
    }))
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
    <>
    <nav className="top-nav">
      {
        navigationStructure.map((link:LinkStructure) => (
          <React.Fragment key={`top-nav-item-${link.title}-${link.url}`}>
            <NavItem title={link.title} url={link.url} navChildren={link.children}/>
          </React.Fragment>
          
        ))
      }
    </nav>
    <MobileTopNavMenu />
    </>
   );
}
 
export default TopNavMenu;