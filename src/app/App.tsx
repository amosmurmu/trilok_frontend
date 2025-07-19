import { AboutPage } from "@/pages/About"
import { ContactUs } from "@/pages/Contact"
import { HomePage } from "@/pages/Home"
import { ProductsPage } from "@/pages/Products"
import { ProjectsPage } from "@/pages/Projects"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
