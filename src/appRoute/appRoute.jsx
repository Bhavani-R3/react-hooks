import { createBrowserRouter } from 'react-router-dom'
import Ex1 from "../component/Ex1";
import Ex2 from "../component/Ex2";
import Ex3 from "../component/Ex3";
import Ex4 from "../component/Ex4";
import Ex5 from "../component/Ex5";
import Ex6 from "../component/Ex6";
import Ex7 from "../component/Ex7";
import Ex8 from "../component/Ex8";
import Ex9 from '../component/Ex9';
import Ex10 from '../component/Ex10';
import Pnf from './../default/Pnf';
import RouteContainer from './RouteContainer';

// create routes using createBrowserRouter
export const appRoute = createBrowserRouter([
  {
    path: `/`,
    element: <RouteContainer/>,
    children: [
      {
        path: `/`,
        element: <Ex1/>
      },
      {
        path: `/ex2`,
        element: <Ex2/>
      },
      {
        path: `/ex3`,
        element: <Ex3/>
      },
      {
        path: `/ex4`,
        element: <Ex4/>
      },
      {
        path: `/ex5`,
        element: <Ex5/>
      },
      {
        path: `/ex6`,
        element: <Ex6/>
      },
      {
        path: `/ex7`,
        element: <Ex7/>
      },
      {
        path: `/ex8`,
        element: <Ex8/>
      },
      {
        path: `/ex9`,
        element: <Ex9/>
      },
      {
        path: `/ex10`,
        element: <Ex10/>
      },
      {
        path: `/*`,
        element: <Pnf/>
      }
    ]
  }
])
