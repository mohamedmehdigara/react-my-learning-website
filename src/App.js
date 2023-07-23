import React from 'react';
import './App.css';
import AdminDashboard from './components/AdminDashboard';
import HomePage from './components/HomePage';
import RegistrationForm from './components/RegistrationForm';
import TeacherDashboard from './components/TeacherDashboard';

function App() {
  return (
    <div className="App">
      <AdminDashboard/>
      <HomePage/>
      <RegistrationForm/>
      <TeacherDashboard/>
    </div>
  );
}

export default App;
