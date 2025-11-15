import { useState } from "react"; 
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom' 
import NavBar from "./components/NavBar"; 
import Home from './components/Home' 
import About from './components/About' 
import Contact from './components/contact' 
import Service from './components/service'
import Login from './components/Login';  
import ProtectedRoute from './ProtectedRoute'; 
import Card from "./components/Card";

function Layout({handleLogout,isAuthenticated}) { 
return ( 
<> 
<NavBar isAuthenticated={isAuthenticated} onLogout={handleLogout}  /> 
<main style={{ minHeight: "100vh", marginTop: "1rem" }}> 
<Outlet />  
</main> 
</> 
) 
} 
function App() { 
     const[isAuthenticated,setIsAuthenticated]=useState(false) 
     const[redirectPath,setRedirectPath]=useState("/service") 
 
   const handleLogin =() =>{ 
    setIsAuthenticated(true);  
  } 
   const handleLogout = () => { 
    setIsAuthenticated(false);  
  } 
const router = createBrowserRouter([ 
    { 
      path: '/', 
      element: <Layout handleLogout={handleLogout} 
isAuthenticated={isAuthenticated} />,  // parent avec NavBar 
      children: [ 
        { index: true, element: <Home /> }, 
        { path: 'about', element: <About /> }, 
        { path: 'Contact', element: <Contact /> }, 
        { path: 'service', element: <ProtectedRoute isAuthenticated={isAuthenticated} element={<Service /> } path={setRedirectPath} /> }, 
         { path: 'Login', element:<Login onLogin={handleLogin} redirectPath={redirectPath} />  }, 
        { path: "NavBar", element: <NavBar /> }

      ] 
    } 
  ]) 
 
  return ( 
 <> 
  <RouterProvider router={router} /> 
 </> 
  ); 
  
} 
 
export default App 