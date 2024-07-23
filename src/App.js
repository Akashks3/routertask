import "./App.css"
import React from "react";
import {
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./component/Home";
import Fullstack from "./component/Fullstack";
import AIML from "./component/AI & ML";
import CyberSecurity from "./CyberSecurity";
import DataScience from "./DataScience";
import Blockchain from "./component/Blockchain";

function App() {
  return (
    <>

      <div>
        <header>
          <nav>
            <NavLink
              to="/"
            >
              All
            </NavLink>
            <NavLink
              to="/Fullstack"
            >
              Fullstack
            </NavLink>
            <NavLink
              to="/AI & ML"
            >
              AI&ML
            </NavLink>
            <NavLink
              to="/Blockchain"
            >
              Blockchain
            </NavLink>
            <NavLink
              to="/CyberSecurity"
            >
              CyberSecurity
            </NavLink>
            <NavLink
              to="/DataScience"
            >
              DataScience
            </NavLink>
          </nav>
        </header>
      </div>
      <main>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          />
          <Route
            exact
            path="/fullstack"
            element={<Fullstack />}
          />
          <Route
            exact
            path="/AI & ML"
            element={<AIML />}
          /> <Route
            exact
            path="/Blockchain"
            element={<Blockchain />}
          /> <Route
            exact
            path="/CyberSecurity"
            element={<CyberSecurity />}
          /> <Route
            exact
            path="/DataScience"
            element={<DataScience />}
          />
        </Routes>
      </main>    </>
  );
}

export default App;

