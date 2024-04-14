import { useParams } from "react-router-dom";
import TopNavMenu from "../components/navigation/TopNavMenu";
import TextHighlight from "../components/text/TextHighlight";
import toFriendlyName from "../util/text/toFriendlyName";

const ExperienceSingle = () => {
  const {section} = useParams();

  return (
   <main className='experience-page'>
    <TopNavMenu />
    <header>
     <TextHighlight>
        <h1>{toFriendlyName(section || "")}</h1>
     </TextHighlight>
    </header>
   </main>
  )
}

export default ExperienceSingle;
