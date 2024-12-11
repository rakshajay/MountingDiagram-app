import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import InstallDrawing from "./pages/InstallDrawing/InstallDrawing";

function App() {
  return (

    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
                <Route 
                  path="/"
                  element={<InstallDrawing />}
                />
      </Routes>
      <Footer />
      </BrowserRouter>
  )
}

export default App
