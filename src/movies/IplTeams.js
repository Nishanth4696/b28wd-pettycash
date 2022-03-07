import { useState } from "react";
import Counter from "./Counter";
import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card';




export default function IplTeams({name, rating, summary, poster,trailer, id, deleteButton, editButton}){
    const [show, setShow] = useState(false);

const history = useHistory();

const summarystyles = { display :show ? 'block' : 'none'} 
    return (
      
      <Card className="team-container">
        
          
        <img 
          src={poster} 
          alt={name} 
          className="team-poster"/>
        <div className="team-specs">
              <h3 className="team-name">{name}

              <IconButton 
                onClick={() =>{
                  history.push("/iplteams/" + id);
                }} 
                
                  aria-label="delete" 
                  color="primary">
                    <InfoIcon />
                </IconButton>

              <IconButton 
                  onClick ={() => setShow(!show)} 
                  className="team-show-button" 
                  aria-label="delete" 
                  color="primary">
                    {show ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
              </IconButton>
                
              </h3>

             
              </div>

       
        
        {/* <p   style={summarystyles} className="movie-summary">{summary}</p>   */}

        {show ? <p   style={summarystyles} className="team-summary">{summary}</p> : ""}
        <Counter /> {editButton} {deleteButton}
        
        
      </Card>
      
    );
  }

 