import './index.css';
import Employee from './components/employee';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      {
        name: "Abby", 
        role: "Developer", 
        img: "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png"
      },
      {
        name: "Abby", 
        role: "Developer", 
        img: "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png"
      },
      {
        name: "Abby", 
        role: "Developer", 
        img: "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png"
      },
      {
        name: "Abby", 
        role: "Developer", 
        img: "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png"
      }
    ]
  );
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? 
        <>
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee 
                  key={uuidv4()}
                  name={employee.name} 
                  role={employee.role} 
                  img={employee.img}
                />
              );
              
            })}
          </div>
        </>
      :
        <p>You cannot see the employees</p>
      }
    </div>
  );
}

export default App;
