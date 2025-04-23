
import About from "../../components/About/About.tsx";
import Header from "../../components/Header/Header.tsx";
import Skills from "../../components/Skills/Skills.tsx";
import Portfolio from "../../components/Portfolio/Portfolio.tsx";
import Contact from "../../components/Contact/Contact.tsx";
import Footer from "../../components/Footer/Footer.tsx";
const Home: React.FC = () => {


  return (
    <div>
        <Header/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </div>
  );
};

export default Home;
