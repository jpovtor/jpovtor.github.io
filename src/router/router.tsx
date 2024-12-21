import { Radix } from "../Radix";
import { ABout } from "../paginae/about/About";
import { Diseño } from "../paginae/diseño/Diseño";
import { Domus } from "../paginae/domus/Domus";
import { Ilustraciones } from "../paginae/ilustraciones/Ilustraciones";
import { Fotografia } from '../paginae/fotografia/Fotografia';


import { createHashRouter } from "react-router-dom";

export const router = createHashRouter([
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