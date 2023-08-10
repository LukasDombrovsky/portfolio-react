import Navbar from './components/NavBar/NavBar';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import TechStack from './sections/TechStack/TechStack';
import Contact from './sections/contact/Contact';
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
        expand='md'
      />
      <Home id='home' />
      <Section id='about'>
        <About />
      </Section>
      <Section id='projects'>
        <Projects />
      </Section>
      <TechStack id='techStack' />
      <Section id='contact'>
        <Contact />
      </Section>
    </>
  );
}

export default App;
