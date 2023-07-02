import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Navbar from "./components/navbar";
import Homepage from "./components/Homepage";
import TodoList from "./components/Todolist/TodoList1";
import Scheduler from "./components/Scheduler";
import MarksManager from "./components/MarksManager";
import Attendance from "./components/Attendance";
import Timetable from "./components/Timetable";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/TodoList" element={<TodoList />} />
          <Route path="/Scheduler" element={<Scheduler />} />
          <Route path="/marks" element={<MarksManager />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
