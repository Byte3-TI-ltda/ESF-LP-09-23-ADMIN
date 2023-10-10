import { ReactNode } from "react";

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Help from './pages/Help';
import NotFound from './pages/NotFound';
import AllClients from "./pages/AllClients";

interface RouteProps {
  path: string;
  element: ReactNode;
}

const allRoutes: RouteProps[] = [
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/settings',
    element: <Settings />
  },
  {
    path: '/help',
    element: <Help />
  },
  {
    path: '/all-clients',
    element: <AllClients />
  },
  {
    path: '/not-found',
    element: <NotFound />
  },
]

export default allRoutes;