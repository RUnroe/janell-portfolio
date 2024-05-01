import { useNavigate, useParams } from "react-router-dom";
import TextHighlight from "../components/text/TextHighlight";
import toFriendlyName from "../util/text/toFriendlyName";
import pageData from "../pageData";
import { useEffect, useState } from "react";
import hasOwnProperty from "../util/types/hasOwnProperty";

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
  

  return (
    <>
      <main className='experience-page'>
        <header>
          <TextHighlight>
            <h1>{toFriendlyName(sectionData?.pageTitle || section || "")}</h1>
          </TextHighlight>
        </header>
      </main>
    </>
  )
}

export default ExperienceSingle;
