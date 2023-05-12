import {  createBrowserRouter } from 'react-router-dom';
import { Layuot } from '../Layuot';
import { MainPage } from '../pages/MainPage';
import { AboutPage } from '../pages/AboutPage';
import { ErrorPage } from '../pages/ErrorPage';
import { CatalogPage } from '../pages/Catalog';

export const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layuot/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '*',
          element:<ErrorPage />
        },
        {
          index: true,
          element:<MainPage />
        },
        {
          path: '*',
          element: <AboutPage />
        },
        {
            path: '*',
            element: <CatalogPage />
        }
      ]
    }
  ])
  