import TopNavMenu from "../components/navigation/TopNavMenu";
import TextHighlight from "../components/text/TextHighlight";
import Container from "../components/layout/Container";

const Home = () => {

  return (
    <>
      <TopNavMenu />
      <main className='home-page'>
        <Container>
          <header>
            <h1 className="text-uppercase large"><TextHighlight>Hello, </TextHighlight><TextHighlight> I'm Janell Rogers</TextHighlight></h1>
          
          </header>
        </Container>
    </main>
   </>
  )
}

export default Home;
