
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Listarticles from "./components/articles/Listarticles"
import Listcategories from "./components/categories/Listcategories"
import Listscategories from "./components/scategories/Listscategories"

import Editarticle from "./components/articles/Editarticle"
import Insertarticle from "./components/articles/Insertarticle"
import Editcategorie from "./components/categories/Editcategorie"
import Insertcategorie from "./components/categories/Insertcategorie"
import Menu from "./components/menu"
import Editscategorie from "./components/scategories/Editscategorie"
import Insertscategorie from "./components/scategories/Insertscategorie"
function App() {

  return (
    <>
      <Router>
        <Menu/>
        <Routes>
          <Route path="/articles" element={<Listarticles/>}></Route>
          <Route path="/categories" element={<Listcategories/>}></Route>
          <Route path="/scategories" element={<Listscategories/>}></Route>

          <Route path="/Editarticles/:id" element={<Editarticle/>}></Route>
          <Route path="/Editcategories/:id" element={<Editcategorie/>}></Route>
          <Route path="/Editscategories/:id" element={<Editscategorie/>}></Route>

          <Route path="/Insertarticles" element={<Insertarticle/>}></Route>
          <Route path="/Insertscategories" element={<Insertcategorie/>}></Route>
          <Route path="/Insertscategories" element={<Insertscategorie/>}></Route>
        </Routes>
      </Router> 
    </>
  )
}

export default App
