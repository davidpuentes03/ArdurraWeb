// Punto de entrada principal de la aplicación con react-router-dom
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "./App";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Registro from "./components/Registro";
import Login from "./components/Login";
import "./styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import PrivateRoute from "./admin/PrivateRoute";
import AdminDashboard from "./admin/AdminDashboard";
import AdminServices from "./admin/AdminServices";
import AdminProjects from "./admin/AdminProjects";
import AdminMessages from "./admin/AdminMessages";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
      <Route path="admin/services" element={<PrivateRoute><AdminServices /></PrivateRoute>} />
      <Route path="admin/projects" element={<PrivateRoute><AdminProjects /></PrivateRoute>} />
      <Route path="admin/messages" element={<PrivateRoute><AdminMessages /></PrivateRoute>} />

      <Route path="services" element={<Services />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
      <Route path="registro" element={<Registro />} />
      <Route path="login" element={<Login />} />
    </Route>
  ),
  //
  {
    basename: "/ArdurraWeb",
  }
  
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
