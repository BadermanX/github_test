import * as React from "react"
import Header from "../partials/Header"
import { Search } from "./Search"
import { Repo } from "./Repo"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/:id" element={<Repo />} />
        </Routes>
      </Router>
    </div>
  )
};