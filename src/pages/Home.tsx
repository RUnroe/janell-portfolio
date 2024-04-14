import TopNavMenu from "../components/navigation/TopNavMenu";
import TextHighlight from "../components/text/TextHighlight";

const Home = () => {

  return (
   <main className='home-page'>
    <TopNavMenu />
    <header>
     <TextHighlight>
        <h1>Hello, <br/> I'm Janell Rogers</h1>
     </TextHighlight>
    </header>
   </main>
  )
}

export default Home;
