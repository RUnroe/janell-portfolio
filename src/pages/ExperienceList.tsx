import TopNavMenu from "../components/navigation/TopNavMenu";
import TextHighlight from "../components/text/TextHighlight";

const ExperienceList = () => {

  return (
   <main className='experience-list-page'>
    <TopNavMenu />
    <header>
     <TextHighlight>
        <h1>Experience</h1>
     </TextHighlight>
    </header>
   </main>
  )
}

export default ExperienceList;