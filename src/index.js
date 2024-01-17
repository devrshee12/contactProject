import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./bootstrap.min.css"
import reportWebVitals from './reportWebVitals';
import ManageContact from './components/ManageContact';
import CreateContact from './components/CreateContact';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './features/store';
import UpdateContact from './components/UpdateContact';



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/contact/create",
        element: <CreateContact/>,
        index: true,
      },
      {
        path: "/contact/manage",
        element: <ManageContact/>
      },
      {
        path: "/contact/update/:contactId",
        element: <UpdateContact/>
      }
    ]
  },

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <RouterProvider router={appRouter}/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
