import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ManageEmployees from './components/ManageEmployees';
import AddEmployee from './components/AddEmployee';
import EmployeeDetails from './components/EmployeeDetails';
import EditEmployee from './components/Edit';

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };
  const handleUpdateEmployee = (index, updatedEmployee) => {
    const updatedEmployees = [...employees];
    updatedEmployees[index] = updatedEmployee;
    setEmployees(updatedEmployees);
  };

  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/manage-employees" element={<ManageEmployees employees={employees} />} />
          <Route path="/edit-employee/:id" element={<EditEmployee onUpdate={handleUpdateEmployee} />} />
          <Route path="/add-employee" element={<AddEmployee addEmployee={addEmployee} />} />
          <Route path="/employee-details/:id" element={<EmployeeDetails employees={employees} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
