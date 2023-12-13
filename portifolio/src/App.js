import './App.css';
import Navbar from './componentes/sections/Navbar';
import Presetation from './componentes/sections/Presentation';
import Footer from './componentes/sections/Footer';
import Skills from './componentes/sections/Skills';
import Projects from './componentes/sections/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presetation/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
