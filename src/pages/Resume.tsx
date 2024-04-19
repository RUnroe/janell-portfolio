import TopNavMenu from "../components/navigation/TopNavMenu";
import TextHighlight from "../components/text/TextHighlight";

const Resume = () => {

  return (
    <>
      <TopNavMenu />
      <main className='resume-page'>
        <header>
        <TextHighlight>
            <h1>Resume</h1>
        </TextHighlight>
        </header>
      </main>
   </>
  )
}

export default Resume;
