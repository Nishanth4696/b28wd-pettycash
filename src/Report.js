import React from "react";
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

import { CustomizedTables } from "./Table";


export function Report({trans}) {
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
       <CustomizedTables rows={rows}/>
        </div>
    </section>

  );
}


