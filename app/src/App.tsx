import Login from "./Components/Login";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Second from "./Components/Second";
import Protected from "./Components/Protected";

function App() {
        
  
  return (
    <>
           <BrowserRouter>
           <Routes>
            <Route path="/"  element={<Login /> }/>
            <Route path="*" element={<h1> Page not found</h1>}/>
            <Route path="protected" element={<Protected />}>
              <Route path="second" element={<Second/>} />
            </Route>
           </Routes>
           </BrowserRouter>
    </>
  )
}

export default App
