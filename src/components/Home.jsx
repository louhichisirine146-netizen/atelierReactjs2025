import { useState, useEffect } from "react"; 
import Card from "./Card";
import { WondersArr } from "../Data";

function Home() { 
 
    const [recherche, setRecherche] = useState(""); 
    const [elementsFiltres, setElementsFiltres] = useState([]); 
   
    useEffect(() => { 
      const resultat = WondersArr.filter((p) => 
        p.name.toLowerCase().includes(recherche.toLowerCase()) 
      ); 
      setElementsFiltres(resultat); 
    }, [recherche]); 
   
    return (  
        <> 
        <h1>WORLD WONDERS</h1> 
         <div class="form-group"> 
Search Wonders... 
 
         <input className="form-control" 
        type="text" 
        value={recherche} 
        onChange={(e) => setRecherche(e.target.value)} 
       /> 
       </div> 
 
      {elementsFiltres.length > 0 ? ( 
      <div className="row row-cols-1 row-cols-md-3 g-4 ">  
      {elementsFiltres.map((wonder) => ( 
    <Card key={wonder.id} 
      wonder={wonder} 
    /> 
  ))} 
  </div> 
  ) : ( 
        <p>Aucun Elément trouvé.</p> 
      )} 
        </> 
); 
} 
export default Home;