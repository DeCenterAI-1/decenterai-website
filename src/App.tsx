import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import MainLayout from "./components/layouts/MainLayout"

function App() {


  return (
    <div className="text-primary-1">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />}/>
            <Route path="/explore" element={<Home />}/>
            <Route path="/history" index element={<Home />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
