import React from "react";
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";

import { CustomizedTables } from "./Table";


export function Report() {
  const [trans, setTrans] = useState([])

  const getTrans = () =>{
    fetch(`https://61b7499a64e4a10017d18a29.mockapi.io/transaction`,{method:"GET"})
    .then((data) => data.json())
    .then((trs) => setTrans(trs))
  }
  useEffect(getTrans,[])

  const deleteTrans = (id) =>{
    fetch(`https://61b7499a64e4a10017d18a29.mockapi.io/transaction/${id}`,{ method:"DELETE" })
    .then(() => getTrans());
    
  }

  const rows = [...trans];
  const data = "";
  const history = useHistory();
  return (
    <section>
      <div className='reports'>
      <div className='reports'>
      <Button  style={{margin:"10px", width:"150px"}} variant="contained" onClick={() => history.push("./home")}>Home</Button>
      <Button  
          
          style={{margin:"10px", width:"150px"}} 
          variant="contained" 
          onClick={() =>history.push('./data')}>Show Data</Button>
      </div>
      <div className='reports'>
      <Button  style={{margin:"10px", width:"150px"}} variant="contained" onClick={() =>data}>Refresh</Button>
      <Button  style={{margin:"10px", width:"150px"}} variant="contained" onClick={() =>history.push('./data')}>Get Reports</Button>
      </div>
      <div className='reports'>
      <Button  style={{margin:"10px", width:"320px"}} variant="contained" onClick={() => window.print()}>Print PettyCash</Button>
      </div>
    </div>
    <div>
       <CustomizedTables rows={rows} deleteTrans={deleteTrans}/>
        </div>
    </section>

  );
}


