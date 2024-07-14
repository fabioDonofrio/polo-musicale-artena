import * as React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route, 
  RouterProvider
} from "react-router-dom";
import Home from './Home';
import Courses from './Courses';
import './App.css';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={<Home />} 
        />
        <Route
          path="/corsi"
          element={<Courses />} 
        />
      </>
    )
  );
  return (
    <RouterProvider router={router} />
  );
}

export default App;
