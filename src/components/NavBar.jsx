import { NavLink } from "react-router-dom"; 
 
function NavBar({isAuthenticated,onLogout}) { 
    return (  
        <> 
        <nav className="navbar navbar-expand-lg bg-body-tertiary"> 
  <div className="container-fluid"> 
     
    <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
      <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
        <li className="nav-item"> 
          <NavLink className="nav-link active" aria-current="page" 
to="/">Home</NavLink> 
        </li> 
        <li className="nav-item"> 
          <NavLink className="nav-link" aria-current="page" 
to="/about">About</NavLink> 
        </li> 
        <li className="nav-item"> 
          <NavLink className="nav-link" aria-current="page" 
to="/Contact">Contact</NavLink> 
        </li> 
      { 
       isAuthenticated ? ( 
<li><button onClick={onLogout} className='btn btn
light'>Logout</button></li>): 
<li className="nav-item"> 
        <NavLink className="nav-link" aria-current="page" 
to="/login">Login</NavLink> 
</li> 

       }
         <li className="nav-item"> 
          <NavLink className="nav-link" aria-current="page" 
to="/service">service</NavLink> 
        </li>
      </ul> 
    </div> 
  </div> 
</nav> 
        </> 
     ); 
} 
 
export default NavBar; 