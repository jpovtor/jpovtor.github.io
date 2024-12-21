import { createBrowserRouter } from "react-router-dom";
import { Radix } from "../Radix";
import { ABout, Diseño, Domus, Ilustraciones,} from "../paginae";
import { Fotografia } from '../paginae/fotografia/Fotografia';



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Radix />,
    children: [

      {
        path: 'domus',
        element: <Domus />
      },

      {
        path: 'ilustraciones',
        element: <Ilustraciones />
      },

      {
        path: 'diseño',
        element: <Diseño />
      },

      {
        path: 'fotografia',
        element: <Fotografia />
      },

      {
        path: 'about',
        element: <ABout />
      },
    ]

      
    }
  ]);