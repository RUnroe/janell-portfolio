import Container from "../layout/Container";
import AnimatedHeader from "../text/AnimatedHeader";

interface Props {
  title: string,
  date: string,
  description: string,
  imageSrc: string,
  index: number,
}

const ProjectSection = ({title, date, description, imageSrc, index}: Props) => {
  const imageOnLeftSide = index % 2 === 1;
  
  const renderImage = () => {
    return (
      <div className="media-container">
        <img 
          src={imageSrc} 
          className="media"
          alt={`${title} image`} 
          title={`${title} image`}
        />
      </div>
    )
  }

  return ( 
    <Container>
    <section className={`project-section experience-grid-layout ${imageOnLeftSide ? "left" : "right"}`}>
      {imageOnLeftSide && renderImage()} 
      <div className="text-container">
        <div className="title-row">
          <AnimatedHeader textList={[title]} tag={"h2"}/>
          <span className="date inria-sans-bold">{date}</span>
        </div>
        <p>{description}</p>

      </div>
      {!imageOnLeftSide && renderImage()}

    </section> 
    </Container>
  );
}
 
export default ProjectSection;