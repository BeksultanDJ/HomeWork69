import './App.css'
import SearchPage from "./components/SearchPage";
import {BrowserRouter as Routes, Route} from "react-router-dom";
import ShowDetails from "./components/ShowDetailsPage.tsx";

function App() {

  return (
      <div>
          <div>
              <Routes>
                  <Route path="/" element={<SearchPage/>}/>
                  <Route path="/shows/:id" element={<ShowDetails/>}/>
              </Routes>
          </div>
      </div>
  )
}

export default App
