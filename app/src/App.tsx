import Login from "./Components/Login";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Second from "./Components/Second";
import Protected from "./Components/Protected";
import { useState } from "react";

function App() {
        
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  console.log(isLoggedIn);

  return (
    <>
           <BrowserRouter>
           <Routes>
            <Route path="/"  element={<Login onLogin={handleLogin}  /> }  />
            <Route path="*" element={<h1> Page not found</h1>}/>
            <Route path="protected" element={<Protected  isLoggedIn={isLoggedIn} />}>
              <Route path="second" element={<Second/>} />
            </Route>
           </Routes>
           </BrowserRouter>
    </>
  )
}

export default App
