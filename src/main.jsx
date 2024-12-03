import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ProductList from './ProductList.jsx'
import ProductDetails from "./ProductDetails.jsx";
import Root from "./Root.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path: "/ProductDetails/:id",
        element: <ProductDetails />,
      },
    ]
   
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <RouterProvider router={router} />
  
);