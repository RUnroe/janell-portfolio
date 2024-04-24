import PageLayout from "../components/layout/PageLayout";
import AnimatedHeader from "../components/text/AnimatedHeader";

const Resume = () => {

  return (
    <PageLayout pageName="resume-page grid-layout">
      <header className="header-title">
        <AnimatedHeader textList={["Resume"]} />
      </header>
    </PageLayout>
  )
}

export default Resume;
