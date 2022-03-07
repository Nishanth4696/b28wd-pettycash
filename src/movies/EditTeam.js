import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useHistory, useParams } from 'react-router-dom';






export function EditTeam() {
    const { id } = useParams();
    
    const [team, setTeam] = useState(null);

    useEffect(() => {
      fetch(`https://620f1911ec8b2ee283336fc9.mockapi.io/IPL/${id}`,{method:"GET"})
      .then((data) => data.json())
      .then((mv) => setTeam(mv))
      
    },[id])

    console.log(team)
   
 return team ? <UpdateTeam team={team}  /> : " "; 
 
}

function UpdateTeam({ team }){
  

  const [name, setName] = useState(team.name);
  const [poster, setPoster] = useState(team.poster);
  const [summary, setSummary] = useState(team.summary); 
  const [brief, setBrief] = useState(team.brief); 
  const [History, setHistory] = useState(team.History);
  const [player, setPlayer] = useState(team.player);
  const [homeground, setHomeground] = useState(team.homeground);
  const [trailer, setTrailer] = useState(team.trailer);
 
  
  const history = useHistory();
  const editTeam = () => {

    console.log("Edited...");
    const updateTeam = {
      name,
      poster,
      summary,
      brief,
      History,
      player,
      homeground,
      trailer,
      
    };
    
    fetch(`https://620f1911ec8b2ee283336fc9.mockapi.io/IPL/${team.id}`,
    {
      method:"PUT",
      body:JSON.stringify(updateTeam),
      headers:{'Content-Type':'application/json'
    },
    }).then(() => history.push("/iplteams"))
    

  
  };


 

  return (

    <div className='add-team-form'>
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        label='Enter the name'
        id="standard-basic"
        variant="standard" />

<TextField
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        label='Enter the poster'
        id="standard-basic"
        variant="standard" />

      <TextField
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        label='Enter the summary'
        id="standard-basic"
        variant="standard" />

     

<TextField
        value={brief}
        onChange={(event) => setBrief(event.target.value)}
        label='Enter the brief'
        id="standard-basic"
        variant="standard" />

<TextField
        value={History}
        onChange={(event) => setHistory(event.target.value)}
        label='Enter the History'
        id="standard-basic"
        variant="standard" />


        <TextField
        value={player}
        onChange={(event) => setPlayer(event.target.value)}
        label='Enter the player'
        id="standard-basic"
        variant="standard" />


        <TextField
        value={homeground}
        onChange={(event) => setHomeground(event.target.value)}
        label='Enter the homeground'
        id="standard-basic"
        variant="standard" />


        <TextField
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        label='Enter the trailer'
        id="standard-basic"
        variant="standard" />




      <Button onClick={editTeam}  variant="outlined" >Save</Button>

    </div>

  );
}