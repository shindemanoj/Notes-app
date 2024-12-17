import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/NotesList.jsx";
import NoteDetails from './pages/NoteDetails';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/note/:id" element={<NoteDetails />} />
            </Routes>
        </Router>
    );
}

export default App;