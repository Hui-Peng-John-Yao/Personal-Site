import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/home/Home';
import Resume from './components/resume/Resume';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="page-shell">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/work" element={<Work />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
