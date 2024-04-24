import PageLayout from "../components/layout/PageLayout";
import AnimatedHeader from "../components/text/AnimatedHeader";
import pageData from "../pageData";


const Resume = () => {

  
  return (
    <PageLayout pageName="resume-page grid-layout">
      <header className="header-title">
        <AnimatedHeader textList={["Resume"]} />
      </header>

      <section className="resume-pdf">
        <iframe 
          className={"pdf"} 
          src={pageData.resume.pdf.src}
          width="100%" height="100%" 
          allow="autoplay">
        </iframe>
      </section>
      
    </PageLayout>
  )
}

export default Resume;
