import { createBrowserRouter, Link, Outlet } from 'react-router';
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home';
import About from './pages/About';
import Layout from './pages/Layout';
import Todos from './pages/Todos';
import TodoById from './pages/TodoById';

const App = () => {

    const router = createBrowserRouter([
        {
           path:"/",
           element:<Layout/>,
           children:[
            {
                index:true,
                element: <Home/>  ,
           },
              {
                  path: "/about",
                  element: <About/>,
                },

                {
                    path:"todos",
                    element:<Todos/>
                },
                {
                    path:"todos/:id",
                    element:<TodoById/>
                },

           ]

        },
        {
            path:"*",
            element:<div>NOT FOUND</div>
        }
      
      ]);


  return (
   <RouterProvider router={router}/>
  )
}

export default App