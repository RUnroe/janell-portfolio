import TextHighlight from "../components/text/TextHighlight";
import PageLayout from "../components/layout/PageLayout";

const Home = () => {

  return (
    <PageLayout pageName="home-page">
      <header>
        <h1 className="text-uppercase large"><TextHighlight>Hello, </TextHighlight><TextHighlight> I'm Janell Rogers</TextHighlight></h1>
      </header>

    </PageLayout>
  )
}

export default Home;
