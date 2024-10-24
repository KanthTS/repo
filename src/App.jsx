import RootLayout from "./components/RootLayout"
import Home from './components/Home';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Register from "./components/Register";
import Technologies from "./components/Technologies";
import Login from "./components/Login";
import RouteError from "./components/RouteError";
import Profile from "./components/Profile";
function App() {
  const b=createBrowserRouter([
    {
        path:'',
        element:<RootLayout/>,
        errorElement:<RouteError/>,
        children:[
          {
            path:'',
            element:<Home/>
          },
          {
             path:'register',
             element:<Register/>
          },
          {
            path:'login',
            element:<Login/>
         },
         {
          path:'technologies',
          element:<Technologies/>
       },
       {
        path:'profile',
        element:<Profile/>
       },
        ]
    },
  ]);

  
  return (
    <div>
    <RouterProvider router={b}/>
    </div>
  )
}

export default App
