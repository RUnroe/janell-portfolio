import pageData from "../../pageData";
import SocialIcon from "./SocialIcon";

const SocialRow = () => {
  return ( 
    <div className="social-row">
      <hr className="center-bg-bar" />

      <div className="socials-container">
        {pageData.contact.socials.map(socialInfo => (
          <SocialIcon 
            title={`${socialInfo.title} - ${socialInfo.username}`}
            url={socialInfo.url}
            iconSrc={socialInfo.iconSrc}
          />
        ))}
      </div>
    </div>
   );
}
 
export default SocialRow;