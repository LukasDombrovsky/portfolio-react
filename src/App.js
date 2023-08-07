import NavigationBar from './components/UI/NavigationBar';
import Home from './components/sections/Home';
import Section from './components/UI/Section';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import TechStack from './components/sections/TechStack';
import Contact from './components/sections/contact/Contact';

import './App.scss';

function App() {
  return (
    <>
      <NavigationBar
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
