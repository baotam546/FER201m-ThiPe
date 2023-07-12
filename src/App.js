import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Detail from './component/Details';
import Dashboard  from './component/Dashboard';
import FormAddEdit from "./component/FormAddEdit";

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
        <Route path="/add" element={<FormAddEdit />}></Route>
        <Route path="/update/:id" element={<FormAddEdit />}></Route>

      </Routes>
    </Router>
  );
}

export default App;