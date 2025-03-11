import BusinessModelCanvas from './components/BusinessModelCanvas'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/:id" element={<BusinessModelCanvas />} />
          <Route path="/:id2/:id" element={<BusinessModelCanvas />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
