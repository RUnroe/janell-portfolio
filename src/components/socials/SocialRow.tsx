import React from "react";
import pageData from "../../pageData";
import SocialIcon from "./SocialIcon";

const SocialRow = () => {
  return ( 
    <div className="social-row">
      <hr className="center-bg-bar" />

      <div className="socials-container">
        {pageData.contact.socials.map((socialInfo, index) => (
          <React.Fragment key={`social-${socialInfo.title}-${index}`}>
            <SocialIcon 
              title={`${socialInfo.title} - ${socialInfo.username}`}
              url={socialInfo.url}
              iconSrc={socialInfo.iconSrc}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
   );
}
 
export default SocialRow;