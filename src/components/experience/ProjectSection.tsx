import { Media } from "../../types/mediaStructure";
import Container from "../layout/Container";
import ImageSlider from "../media/ImageSlider";
import TextHighlight from "../text/TextHighlight";

interface Props {
  title: string[] | string,
  subline: string[] | string,
  date: string,
  description: string,
  media: Media[] | Media,
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

  const renderSwiper = (media: Media[]) => {
    return (
      <div className="media-container">
        <ImageSlider imageLinks={media.map(m => m.src)}   />   
      </div>
    )
  }

  const renderMedia = () => {
    if(Array.isArray(media)) {
      return renderSwiper(media);
    }
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
          {/* <AnimatedHeader textList={Array.isArray(title) ? title : [title]} tag={"h2"}/> */}
          <h2>
          {(Array.isArray(title) ? title : [title]).join(" ").split(" ").map(word => (
            <TextHighlight><span className="inria-sans-bold">{word}&nbsp;</span></TextHighlight>
          ))}
          </h2>
          <span className="date inria-sans-bold">{date}</span>
        </div>
        {subline?.length && 
          <div className="subline">
            {Array.isArray(subline) ? subline.map(line => <p className="inria-sans-bold">{line}</p>) : <p className="inria-sans-bold">{subline}</p>}
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