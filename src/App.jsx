import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateLayout from './layouts/PrivateLayout'
import Admin from './pages/Admin.jsx';
import Devices from './pages/Devices.jsx'
import Companies from './pages/Companies.jsx'
import Dashboard from './pages/Dashboard';
import Lists from './pages/Lists';
import Reports from './pages/Reports';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/admin/Dashboard/reports' element={ <PrivateLayout Children={ <Reports/> }/> } />
          <Route path='/admin/Dashboard/lists' element={ <PrivateLayout Children={ <Lists/> }/> } />
          <Route path='/admin/Dashboard' element={ <PrivateLayout Children={ <Dashboard/> }/> } />
          <Route path='/admin/companies' element={ <PrivateLayout Children={ <Companies/> }/> } />
          <Route path='/admin/devices' element={ <PrivateLayout Children={ <Devices/> }/> } />
          <Route path='/admin' element={ <PrivateLayout Children={ <Admin/> }/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
