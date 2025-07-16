import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import { AboutPage } from "./components/AboutPage"
import { ContactUs } from "./components/ContactUs"
import { ProductsPage } from "./components/ProductsPage"
import { ProjectDetailPage } from "./components/ProjectDetailPage"
import { ProjectsPage } from "./components/ProjectsPage"

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
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
