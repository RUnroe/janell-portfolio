import { Media } from "../../types/mediaStructure";
import Container from "../layout/Container";
import AnimatedHeader from "../text/AnimatedHeader";

interface Props {
  title: string,
  subline: string[] | string,
  date: string,
  description: string,
  media: Media,
  index: number,
}

const ProjectSection = ({title, subline, date, description, media, index}: Props) => {
  const imageOnLeftSide = index % 2 === 1;
  
  const renderImage = (imageSrc: string) => {
    return (
      <div className="media-container">
        <img 
          src={imageSrc} 
          className="media"
          alt={`${title} image`} 
          title={`${title} image`}
        />
      </div>
    );
  }

  const renderVideo = (videoSrc: string) => {
    return (
      <div className="media-container">
        <iframe title="YouTube video player" src={videoSrc} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
    )
  }

  const renderMedia = () => {
    if(media.type === "video") {
      return renderVideo(media.src);
    }
    return renderImage(media.src);
    
  }

  return ( 
    <Container>
    <section className={`project-section experience-grid-layout ${imageOnLeftSide ? "left" : "right"}`}>
      {imageOnLeftSide && renderMedia()} 
      <div className="text-container">
        <div className="title-row">
          <AnimatedHeader textList={[title]} tag={"h2"}/>
          <span className="date inria-sans-bold">{date}</span>
        </div>
        {subline?.length && 
          <div className="subline">
            {Array.isArray(subline) ? subline.map(line => <p>{line}</p>) : <p>{subline}</p>}
          </div>
        }
        <p>{description}</p>

      </div>
      {!imageOnLeftSide && renderMedia()}

    </section> 
    </Container>
  );
}
 
export default ProjectSection;