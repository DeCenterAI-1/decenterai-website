import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./components/layouts/MainLayout"
import Inferencing from "./pages/inferencing"
import InferencingJob from "./pages/inferencing/inferencing-job"
import History from "./pages/history"
import Explore from "./pages/explore"

function App() {

  return (
    <div className="text-primary-1">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Inferencing />}/>
            <Route path="/inferencing" element={<Inferencing />}/>
            <Route path="/inferencing/:job" element={<InferencingJob />}/>
            <Route path="/history" index element={<History />}/>
            <Route path="/explore" element={<Explore />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
