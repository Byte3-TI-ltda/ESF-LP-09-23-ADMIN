// import { ReactNode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyles } from './styles/global';

import Layout from './components/Layout';

import { SidebarProvider } from './contexts/SidebarContext';

import allRoutes from './Routes';
import { UsersProvider } from './contexts/UsersContext';
import { UserTokenProvider } from './contexts/UserToken';
import { LoggedUserProvider } from './contexts/LoggedUser';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <LoggedUserProvider>
        <UserTokenProvider>

          <UsersProvider>
            <SidebarProvider>
              <Layout>
                <Routes>
                  {/* Rotas que não precisam do UsersProvider */}
                  <Route path="/login" element={<Login />} />

                  {/* Rotas que precisam do UsersProvider */}
                  {allRoutes.map(route => (
                    route.path !== '/login' && (

                      <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                      />

                    )
                  ))}
                </Routes>
              </Layout>
            </SidebarProvider>
          </UsersProvider>

        </UserTokenProvider>
      </LoggedUserProvider>
    </BrowserRouter>
  )
}

export default App
