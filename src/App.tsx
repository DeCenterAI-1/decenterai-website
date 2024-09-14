import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/inferencing"
import MainLayout from "./components/layouts/MainLayout"
import Inferencing from "./pages/inferencing"
import InferencingJob from "./pages/inferencing/inferencing-job"

function App() {


  return (
    <div className="text-primary-1">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Inferencing />}/>
            <Route path="/inferencing" element={<Inferencing />}/>
            <Route path="/inferencing/:job" element={<InferencingJob />}/>
            <Route path="/explore" element={<Home />}/>
            <Route path="/history" index element={<Home />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
