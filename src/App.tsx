import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { GlobalStyles } from './styles/global';

import Layout from './components/Layout';

import { SidebarProvider } from './contexts/SidebarContext';

import allRoutes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <SidebarProvider>
        <Layout>
          <Routes>
            {allRoutes.map(route => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            <Route path="*" element={<Navigate to="/not-found" replace />} />
          </Routes>
        </Layout>
      </SidebarProvider>

    </BrowserRouter>
  )
}

export default App
