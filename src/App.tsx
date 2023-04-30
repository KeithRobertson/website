import React, {StrictMode, useEffect} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./component/Home/Home";
import Library from "./component/Library/Library";

function App() {
    useEffect(() => {
        document.title = "Keith Robertson";
    }, []);

    return (
        <StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/library" element={<Library/>}/>
                </Routes>
            </BrowserRouter>
        </StrictMode>
    );
}

export default App;
