import { useNavigate, useParams } from "react-router-dom";
import toFriendlyName from "../util/text/toFriendlyName";
import pageData from "../pageData";
import { useEffect, useState } from "react";
import hasOwnProperty from "../util/types/hasOwnProperty";
import ProjectSection from "../components/experience/ProjectSection";
import { WaveBGIcon } from "../assets/icons/icons";

const ExperienceSingle = () => {
  const navigate = useNavigate();
  const {section} = useParams();
  const [sectionData, setSectionData] = useState<any>();

  useEffect(() => {
    if(section) {
      if(hasOwnProperty(pageData.experience, section)) {
        setSectionData(pageData.experience?.[section]);
      }
      else {
        navigate("/");
      }
    }
  }, [section])
  
  if(sectionData) {
    return (
      <>
        <main className='experience-page'>
          <header className="image-header" style={{backgroundImage: `url('${sectionData.coverImageSrc}')`}}>
              <h1>{toFriendlyName(sectionData.pageTitle || section || "")}</h1>
          </header>
          <section className="projects">
            {sectionData.projects.map((project: any, index: number) => (
              <ProjectSection
                title={project.title}
                subline={project.subline}
                date={project.dateString}
                description={project.description} 
                media={project.media}
                index={index}
              />
            ))}
          </section>
        </main>
        <WaveBGIcon />
      </>
    )
  }
}

export default ExperienceSingle;
