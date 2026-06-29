import React from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects/Projects";
import Goals from "./pages/Goals/Goals";
import Sessions from "./pages/Sessions/Sessions";

function Layout({ children }) {

  console.log("API URL:", import.meta.env.VITE_API_URL);
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Dashboard name="Samia" />
            </Layout>
          }
        />
        <Route
          path="/sessions"
          element={
            <Layout>
              <Sessions />
            </Layout>
          }
        />
        <Route
          path="/goals"
          element={
            <Layout>
              <Goals />
            </Layout>
          }
        />
        <Route
          path="/projects"
          element={
            <Layout>
              <Projects />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
