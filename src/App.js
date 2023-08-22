import { useContext } from 'react';
import { flowContext } from './functionality/flow';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Projects from './components/Projects';
import './App.css';


function App() {

  const [{ flowName }] = useContext(flowContext);

  return (
    <div className={`${flowName}`}>
      <Header>
        <Nav />
      </Header>
      <main>
        <About />
        <Portfolio />
        <Resume />
        <Contact />
        <Projects />
      </main>
      <Footer />
       </div>
  )
}

export default App;
