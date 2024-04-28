import { useParams } from "react-router-dom";
import TextHighlight from "../components/text/TextHighlight";
import toFriendlyName from "../util/text/toFriendlyName";

const ExperienceSingle = () => {
  const {section} = useParams();

  return (
    <>
      <main className='experience-page'>
        <header>
          <TextHighlight>
            <h1>{toFriendlyName(section || "")}</h1>
          </TextHighlight>
        </header>
      </main>
    </>
  )
}

export default ExperienceSingle;
