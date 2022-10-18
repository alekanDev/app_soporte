import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateLayout from './layouts/PrivateLayout'
import Public from './layouts/PublicLayout'
// import Admin from './pages/Admin.jsx';
import Devices from './pages/Devices.jsx'
import FormAddDevice from './pages/FormAddDevice';
import Companies from './pages/Companies.jsx'
import Dashboard from './pages/Dashboard';
import Lists from './pages/Lists';
import Reports from './pages/Reports';
import Register from './pages/Register'
import Index from './pages/Index'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/admin/devices/reports' element={ <PrivateLayout Children={ <Reports/> }/> } />
          <Route path='/admin/devices/addDevice' element={ <PrivateLayout Children={ <FormAddDevice /> }/> } />
          <Route path='/admin/devices' element={ <PrivateLayout Children={ <Devices/> }/> } />

          <Route path='/admin/Dashboard/lists' element={ <PrivateLayout Children={ <Lists/> }/> } />
          <Route path='/admin/Dashboard' element={ <PrivateLayout Children={ <Dashboard/> }/> } />

          <Route path='/admin/companies' element={ <PrivateLayout Children={ <Companies/> }/> } />
          {/* <Route path='/admin' element={ <PrivateLayout Children={ <Admin/> }/> } /> */}
          
          <Route path='/register' element={ <Public Children={ <Register /> }/> } />

          <Route path='/' element={ <Public Children={ <Index /> }/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
