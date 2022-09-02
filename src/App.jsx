import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateLayout from './layouts/PrivateLayout'
import Admin from './pages/Admin.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/admin' element={ <PrivateLayout Children={ <Admin/> }/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
