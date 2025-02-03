import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Insert from "./Pages/Insert";
import Display from "./Pages/Display";
import Search from "./Pages/Search";
import Update from "./Pages/Update";
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";



const App=()=>{
  return(
    <>
    
   
    <BrowserRouter>
    <Routes>
      
      <Route  path="/"  element={<Layout/>}>
      <Route path="home" element={<Home/>}/>
      <Route path="insert" element={<Insert/>}/>
      <Route path="display" element={<Display/>}/>
      <Route path="search" element={<Search/>}/>
      <Route path="update" element={<Update/>}/>
      <Route path="edit/:empid" element={<Edit/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;