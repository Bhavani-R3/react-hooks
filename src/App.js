import React from "react";
import { RouterProvider } from "react-router-dom";
import { appRoute } from './appRoute/appRoute';

function App() {
  return (
    <RouterProvider router={ appRoute } />
  )
}

export default App
