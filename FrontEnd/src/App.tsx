
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
 

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/Home" element={<Home/>}></Route>
    <Route path="/About" element={<About/>}></Route>

   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
