import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomepageFlex from './Pages/Homepage/HomepageFlex';
import Test from './Components/Test/test';

const router = createBrowserRouter([
  {
    path: "/homepageflex",
    element: <HomepageFlex/>,
  },
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/test-flex",
    element: <Test/>
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
