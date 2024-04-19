import TopNavMenu from "../components/navigation/TopNavMenu";
import TextHighlight from "../components/text/TextHighlight";

const Contact = () => {

  return (
    <>
    <TopNavMenu />
      <main className='contact-page'>
        <header>
        <TextHighlight>
            <h1>Contact</h1>
        </TextHighlight>
        </header>
      </main>
   </>
  )
}

export default Contact;
