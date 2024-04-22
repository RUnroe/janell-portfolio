import { IconComponentType } from "../../assets/icons/icons";

interface Props {
  IconComponent: IconComponentType,
  text: string,
}

const IconText = ({IconComponent, text}: Props) => {
  return ( 
    <div className="icon-text">
      <IconComponent className={"contact-icon icon"}/>
      <p className="inria-sans-bold">{text}</p>
    </div>
   );
}
 
export default IconText;