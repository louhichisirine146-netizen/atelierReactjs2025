import { useState } from "react"; 
import Swal from 'sweetalert2'; 
import { useNavigate } from "react-router-dom"; 
   
function Login({ onLogin,redirectPath }) { 
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  
  const navigate = useNavigate(); // Hook pour naviguer entre les routes 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
 
    // Vérification des identifiants 
    if (username === "user" && password === "password") { 
       Swal.fire({ 
        icon: "success", 
        text: "Connection made successfully" 
       });
        onLogin(); // Appel de la fonction de connexion 
        navigate(redirectPath || "/service"); // Redirection vers la route 
souhaitée  
      
    } 
     else { 
       Swal.fire({ 
        icon: "error", 
        title: "Connection Error", 
        text: "Wrong credentials!" 
      }); 
    } 
  }; 
 
  return ( 
   <div> 
    <br /> 
    <form onSubmit={handleSubmit}> 
          <div className="form-group"> 
            <label htmlFor="Login">Login</label> 
     
                <input  
                    className="form-control" 
                    type="text"  
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}  
                /> 
            </div> 
     
           <div className="form-group"> 
            <label htmlFor="password">Password</label> 
              
                <input  
                    className="form-control"  
                    type="password"  
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}  
                /> 
         
        </div> 
        <button type="submit" className="btn btn-primary">Submit</button> 
       
          
    </form> 
</div> 
  ); 
} 
 
export default Login;