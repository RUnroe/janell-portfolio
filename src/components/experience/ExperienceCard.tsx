import { Link } from "react-router-dom";

interface Props {
  imageSrc: string,
  title: string,
  urlParam: string,
}

const ExperienceCard = ({imageSrc, title, urlParam}: Props) => {
  return ( 
    <Link to={`/experience/${urlParam}`} className="experience-card card">
      <img className="background-image" src={imageSrc}/>
      <div className="image-overlay" />
      <p className="inria-serif-bold text-uppercase">{title}</p>
      {/* <AnimatedHeader textList={["Experience"]} headerClassName="inria-serif-bold text-uppercase" /> */}
    </Link>
   );
}
 
export default ExperienceCard;