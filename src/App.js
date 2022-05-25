import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Skills from './containers/skills';

function App() {
  return (
    <div className="App">
      {/* particle js */}

      {/* navbar component */}

      {/* main page content */}
      <Routes>
        {/* create routes */}
        <Route path='/' index element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/skills' element={<Skills/>} />
      </Routes>

    </div>
  );
}

export default App;
