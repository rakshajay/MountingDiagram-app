import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InstallDrawing from "./pages/InstallDrawing/InstallDrawing";

function App() {
  return (

    <BrowserRouter>
      <Routes>
                <Route 
                  path="/"
                  element={<InstallDrawing />}
                />
      </Routes>
      </BrowserRouter>
  )
}

export default App
