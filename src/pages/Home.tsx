import TextHighlight from "../components/text/TextHighlight";
import PageLayout from "../components/layout/PageLayout";
import pageData from "../pageData";

import headshot from "../assets/images/headshot.jpg";

const Home = () => {

  return (
    <PageLayout pageName="home-page">
      
        <header className="header">
          <h1 className="text-uppercase large"><TextHighlight>Hello, </TextHighlight><TextHighlight> I'm Janell Rogers</TextHighlight></h1>
        </header>
        
        <aside className="headshot">
          <img className="dropshadow border-radius" src={headshot} />
        </aside>
        
        <section className="about-content">
          <p className="headline sub-header">{pageData.home.headline}</p>

          <p className="bio text-justify">
            {pageData.home.bio}
          </p>
        </section>

    </PageLayout>
  )
}

export default Home;
