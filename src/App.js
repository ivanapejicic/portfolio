import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './assets/pages/Home/Home';
import About from './assets/pages/About/About';
import Work from './assets/pages/Work/Work';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path= '' element={<Home />} />
          <Route path= '/about' element={<About /> } /> 
          <Route path = '/work' element={<Work /> } /> */}
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
