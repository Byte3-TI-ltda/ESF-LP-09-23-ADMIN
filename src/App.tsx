import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { GlobalStyles } from './styles/global';
import Settings from './pages/Settings';
import { SidebarProvider } from './contexts/SidebarContext';
import Layout from './components/Layout';
import Menu from './components/Menu';

function App() {
  function SidebarWithCondition() {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";
    const isSignUpPage = location.pathname === "/signup";

    return !isLoginPage && !isSignUpPage ? <Menu /> : null;
  }
  return (
    <BrowserRouter>
      <GlobalStyles />

      <SidebarProvider>
        <Layout>
          <SidebarWithCondition />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </Layout>
      </SidebarProvider>

    </BrowserRouter>
  )
}

export default App
