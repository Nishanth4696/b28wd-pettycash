import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

 export function TeamDetails() {
  const { id  } = useParams();
  const history = useHistory();
  const [team, setTeam] = useState({});

  useEffect(() => {
    fetch(`https://620f1911ec8b2ee283336fc9.mockapi.io/IPL/${id}`,{method:"GET"})
    .then((data) => data.json())
    .then((mv) => setTeam(mv))
  },[id])
 

  // const movie = Movies[id];
 
  return (
    <div className="team-detail-container">
      <Button onClick={() => history.goBack()} variant="outlined" startIcon={<ArrowBackIcon />}> Back </Button>
      <iframe 
          width="100%" 
          height="480" 
          src={team.trailer} 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>

          </iframe>
      
        <div className="team-specs">
        <h3 className="team-name">{team.name}</h3>

        
        </div>

   <p className="team-summary">{team.summary}</p> 
<h2>Brief:</h2>
   <p className="team-brief">{team.brief}</p>  
   <h2>History:</h2>
   <p className="team-history">{team.History}</p>
   <h2>Home Ground:</h2>
   <p className="team-homeground">{team.homeground}</p>
   <h2>Players:</h2>
   <p className="team-homeground">{team.player}</p>    
    

  </div>
  );
}
