import './index.css';
import Employee from './components/employee';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import AddEmployee from './components/addEmployee';
import EditEmployee from './components/editEmployee';
import Navbar from './components/navbar';
import { comment } from 'postcss';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: "Abby", 
        role: "Super Admin", 
        img: "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png"
      },
      {
        id: 2,
        name: "Carl", 
        role: "Admin", 
        img: "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png"
      },
      {
        id: 3,
        name: "Sal", 
        role: "Employee", 
        img: "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png"
      },
      {
        id: 4,
        name: "Art", 
        role: "Employee", 
        img: "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png"
      },
      {
        id: 4,
        name: "Russell", 
        role: "Employee", 
        img: "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png"
      },
      {
        id: 4,
        name: "Melvin", 
        role: "Employee", 
        img: "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png"
      }
    ]
  );

  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((getEmployee) => {
      if(id == getEmployee.id){
        return{...getEmployee, name: newName, role: newRole}
      }
      return getEmployee;
    });
    setEmployees(updatedEmployees);
  }
  function newEmployee(name,role,img){
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img
    }
    setEmployees([...employees, newEmployee])
  }

  const showEmployees = true;
  return (
    <div className="App bg-gray-300 min-h-screen">
      <Navbar />
      
      {showEmployees ? 
        <>
          <div className="flex flex-wrap justify-center mt-6">
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee 
                  id={employee.id}
                  name={employee.name} 
                  role={employee.role} 
                  updateEmployee={updateEmployee}
                />
              );
              return (
                <Employee 
                  key={employee.id}
                  id={employee.id}
                  name={employee.name} 
                  role={employee.role} 
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
            
          </div>
        </>
      :
        <p>You cannot see the employees</p>
      }
      <AddEmployee newEmployee={newEmployee} />
    </div>
  );
}

export default App;
