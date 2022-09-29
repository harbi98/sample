import './index.css';
import Employee from './components/employee';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import AddEmployee from './components/addEmployee';
import EditEmployee from './components/editEmployee';
import Navbar from './components/navbar';
import Employees from './pages/employees';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Customers from './pages/customers';

function App() {
    return (
        <BrowserRouter>
          <Navbar>
            <Routes>
              <Route path='/employees' element={<Employees />}/>
              <Route path='/customers' element={<Customers />}/>
            </Routes>
          </Navbar> 
        </BrowserRouter>
      );
  }

export default App;
