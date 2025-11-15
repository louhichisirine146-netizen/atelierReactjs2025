import { Navigate } from 'react-router-dom'; 
function ProtectedRoute() {
const ProtectedRoute = ({ isAuthenticated,element }) => { 
if (!isAuthenticated) { 
return <Navigate to="/Login" />; 
} 
    return element; 
   
} 
}
export default ProtectedRoute 