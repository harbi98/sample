import './App.css';
import Employee from './components/employee';

function App() {
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? 
        <>
          <Employee name ="Caleb" role="Intern"/>
          <Employee name ="Abby"/>
          <Employee name ="Jeni"/>
          <Employee name ="John"/>
          <Employee name ="Art"/>
        </>
      :
        <p>You cannot see the employees</p>
      }
    </div>
  );
}

export default App;
