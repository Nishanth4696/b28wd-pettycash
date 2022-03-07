import './App.css';
import { useState} from 'react';
import React from "react";
import { Welcome } from './Welcome';
import {NotFound} from './NotFound'
import { Switch, Route, useHistory } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
// import {LoginApp} from './b28wd-motors/LoginApp'
import { AddPettyCash }  from './Add PettyCash';
import { Report } from './Report';
import { Data } from './Data';


export default function App() {
  
  const history = useHistory();
  const [mode, setMode] = useState("dark");


  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const [trans, setTrans] = useState('')

 
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={1} style={{borderRadius: "0px", minHeight: "100vh"}}>
        <div className="App">
          
          <AppBar position="sticky">
            <Toolbar variant="dense">
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./home")}>Home</Button>
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./pettycash")}>Add Petty-Cash</Button>
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./report")}>Reports</Button>

              <Button 
                startIcon ={mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon /> }
                variant="text" 
                style={{marginLeft: "auto"}} 
                color="inherit" 
                onClick={() => setMode(mode ==='light'? 'dark' : 'light')}>  
              {mode==='light'? 'Dark' : 'Light'} Mode</Button>
            
            </Toolbar>
        </AppBar>
        
          <Switch>
          

            <Route exact path="/pettycash">
              <AddPettyCash trans={trans} setTrans={setTrans}/>
            </Route>

            <Route exact path="/report">
              <Report trans={trans} setTrans={setTrans} />
            </Route>
           
            <Route exact path="/data">
              <Data />
            </Route>

            

            

            <Route exact path="/home">
                <Welcome />
            </Route>

            {/* <Route exact path="/">
                <LoginApp />
            </Route> */}

            

            <Route path="/**">
              <NotFound />
            </Route>
          </Switch>      
        </div>
        </Paper>
     </ThemeProvider> 
  );
}


