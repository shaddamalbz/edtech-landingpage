import { createBrowserRouter } from 'react-router-dom'

// layouts
import BaseLayout from '@/layouts/baseLayout'

// pages
import Homepage from '@/pages/Homepage'
import NotFound from '@/pages/404'

const router = createBrowserRouter([
  {
    path: '/edtech-landingpage',
    element: <BaseLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default router
