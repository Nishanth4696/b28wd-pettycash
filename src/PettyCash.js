import React from "react";
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import { API_URL } from './global-constants.js';
import { CustomizedTables } from "./Table";


export function PettyCash() {
  const [trans, setTrans] = useState([])

  const getTrans = () =>{
    fetch(`${API_URL}/pettycash`,{method:"GET"})
    .then((data) => data.json())
    .then((trs) => setTrans(trs))
  }
  useEffect(getTrans,[])

  const deleteTrans = (_id) =>{
    fetch(`${API_URL}/pettycash/${_id}`,{ method:"DELETE" })
    .then(() => getTrans());
    
  }

  const rows = [...trans];
  
  const history = useHistory();
  return (
    
    <section>
      <div>
            <h1 className='head'>PETTY CASH</h1>
        </div>
      <div className='reports'>
      <div className='reports'>
      <Button  style={{margin:"10px", width:"150px"}} variant="contained" onClick={() => history.push("./home")}>Home</Button>
      <Button  
          
          style={{margin:"10px", width:"150px"}} 
          variant="contained" 
          onClick={() =>history.push('./report')}>Show Data</Button>
      </div>
      <div className='reports'>
      <Button  style={{margin:"10px", width:"150px"}} variant="contained" onClick={() =>window.location.reload(false)}>Refresh</Button>
      <Button  style={{margin:"10px", width:"150px"}} variant="contained" onClick={() =>history.push('./printreport')}>print Reports</Button>
      </div>
      
    </div>
    <div>
       <CustomizedTables rows={rows} deleteTrans={deleteTrans}/>
        </div>
    </section>

  );
}


