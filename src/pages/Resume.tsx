import TopNavMenu from "../components/navigation/TopNavMenu";
import TextHighlight from "../components/text/TextHighlight";

const Resume = () => {

  return (
   <main className='resume-page'>
    <TopNavMenu />
    <header>
     <TextHighlight>
        <h1>Resume</h1>
     </TextHighlight>
    </header>
   </main>
  )
}

export default Resume;
