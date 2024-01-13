import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './assets/pages/Home/Home';
import About from './assets/pages/About/About';
import Work from './assets/pages/Work/Work';
import Contact from './assets/pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path= '' element={<Home />} />
          <Route path= '/about' element={<About /> } /> 
          <Route path = '/work' element={<Work /> } /> 
          <Route path = '/contact' element={<Contact /> } /> 
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
