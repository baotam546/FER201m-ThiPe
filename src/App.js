import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Detail from './component/Details';

const Dashboard = () => <h1>Dashboard Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;