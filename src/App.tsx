import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import MyNavbar from "./components/MyNavbar"
import MyFooter from "./components/MyFooter"
import FetchArticles from "./components/FetchArticles"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Details from "./components/Details"

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<FetchArticles />} />
          <Route path="/details/:myId" element={<Details />} />
        </Routes>
      </main>
      <MyFooter />
    </BrowserRouter>
  )
}

export default App
