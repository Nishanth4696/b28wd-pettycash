import  IplTeams  from './IplTeams';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit'
import { useHistory } from 'react-router-dom';
import { useState,useEffect } from 'react';


export default function TeamList(){
  const [Teams, setTeams] = useState([]);

  const getTeams = () =>{
    fetch("https://620f1911ec8b2ee283336fc9.mockapi.io/IPL",{method:"GET"})
    .then((data) => data.json())
    .then((mvs) => setTeams(mvs))
  }
  useEffect(getTeams,[])

  const history = useHistory();

  const deleteMovie = (id) =>{
    fetch(`https://620f1911ec8b2ee283336fc9.mockapi.io/IPL/${id}`,{ method:"DELETE" })
    .then(() => getTeams());
    
  }
 
    return(
      <section className="teamList">
         {Teams.map(({name,rating,summary, poster, trailer, id}) => 
          <IplTeams 
            name={name} 
            rating={rating} 
            summary={summary} 
            poster={poster}
            trailer={trailer}
            id={id}
            deleteButton={
              <IconButton 
                onClick={() =>{deleteMovie(id)}}
                  className="team-show-button"
                  aria-label="delete" 
                  color="error">
                    <DeleteIcon />
                </IconButton>
            }
            editButton={
              <IconButton 
                onClick={() =>{ history.push("/iplteams/edit/" + id)
                 
                }} 
                style={{ marginLeft:"auto" }}
                className="team-show-button"
                  aria-label="edit" 
                  color="primary">
                    <EditIcon />
                </IconButton>
            }
            />)
          }
      </section>
    );
  }
