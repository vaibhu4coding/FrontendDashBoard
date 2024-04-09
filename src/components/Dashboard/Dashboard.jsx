import React from 'react';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import Right from '../Right/Right';

const Dashboard = () => {
  return (
    <>
      
    <div className="dashboard" style={{backgroundColor:'#f4f5f8'}}>
        <Sidebar />
        <Main />
        <Right />
    </div></>
  );
};

export default Dashboard;
