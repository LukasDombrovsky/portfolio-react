import Navbar from './components/NavBar/NavBar';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import TechStack from './sections/TechStack/TechStack';
import Contact from './sections/Contact/Contact';
import Section from './components/Section/Section';
import Home from './sections/Home/Home';

import './App.scss';

function App() {
  return (
    <>
      <Navbar
        brand='Lukas Dombrovsky'
        homeLink='home'
        links={['about', 'projects', 'techStack', 'contact']}
        expand='lg'
      />
      <Home id='home' />
      <Section id='about'>
        <About />
      </Section>
      <Section
        id='projects'
        background='linear-gradient(135deg, #2a0634, #462bc9)'
      >
        <Projects />
      </Section>
      <TechStack id='techStack' />
      <Section
        id='contact'
        background='linear-gradient(135deg, #2a0634, #462bc9)'
      >
        <Contact />
      </Section>
    </>
  );
}

export default App;
