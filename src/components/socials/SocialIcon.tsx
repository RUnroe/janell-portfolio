import { IconComponentType } from "../../assets/icons/icons";

interface Props {
  title: string,
  url: string,
  IconComponent: IconComponentType,
}

const SocialIcon = ({title, url, IconComponent}: Props) => {
  return ( 
    <a 
      className="social-link"
      href={url} 
      title={title}
      target="_blank" 
    >
      <IconComponent className={"social-icon icon"} />
      {/* <img className={"social-icon icon"} src={iconComponent} /> */}
    </a>
   );
}
 
export default SocialIcon;