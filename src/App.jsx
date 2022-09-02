import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateLayout from './layouts/PrivateLayout'
import Admin from './pages/Admin.jsx';
import Devices from './pages/Devices.jsx'
import Companies from './pages/Companies.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/admin/companies' element={ <PrivateLayout Children={ <Companies/> }/> } />
          <Route path='/admin/devices' element={ <PrivateLayout Children={ <Devices/> }/> } />
          <Route path='/admin' element={ <PrivateLayout Children={ <Admin/> }/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
