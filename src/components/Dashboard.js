import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="header">
        <h1 className="title">Employee Management System</h1>
      </header>
      <div className="summary-cards">
        <div className="card">
          <span className="card-title">Admin</span>
          <span className="card-total">Total: 1</span>
        </div>
        <div className="card">
          <span className="card-title">Employee</span>
          <span className="card-total">Total: 1</span>
        </div>
        <div className="card">
          <span className="card-title">Salary</span>
          <span className="card-total">Total: $111</span>
        </div>
      </div>

      <h2 className="sub-title">List of Admins</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>admin@gmail.com</td>
            <td>
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
