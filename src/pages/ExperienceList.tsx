import PageLayout from "../components/layout/PageLayout";
import AnimatedHeader from "../components/text/AnimatedHeader";


const ExperienceList = () => {

  return (
    <PageLayout pageName="experience-list-page grid-layout">
      <header className="header-title">
        <AnimatedHeader textList={["Experience"]} />
      </header>
     
   </PageLayout>
  )
}

export default ExperienceList;
