
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
      <img src={imageSrc} alt={`${title} image`}/>
    )
  }

  return ( 
    <section className="project-section">
      {imageOnLeftSide && renderImage()} 
      <div>
        <div className="title-row">
          <h2>{title}</h2>
          <span className="date">{date}</span>
        </div>
        <p>{description}</p>

      </div>
      {!imageOnLeftSide && renderImage()}

    </section> 
  );
}
 
export default ProjectSection;