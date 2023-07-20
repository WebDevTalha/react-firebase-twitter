import React from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./components/Home"
import Private from "./components/Private"

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/private" element={<Private />} />
            </Routes>
        </>
    )
}

export default App
