import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './assets/pages/Home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path= '' element={<Home />} />
            {/* <Route path= '/contact' element={<Contact /> } /> */}
          {/* <Route path = '/points' element={<Points /> } /> */}
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
