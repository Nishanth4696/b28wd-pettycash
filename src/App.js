import './App.css';
import { useState} from 'react';
import React from "react";
import { Welcome } from './Welcome';
import { AddTeam } from './AddTeam';
import {NotFound} from './NotFound'
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { TeamDetails } from './TeamDetails';
import { EditTeam} from './EditTeam';
import TeamList from './TeamList';
import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { LoginApp } from './LoginApp';
import { PettyCash }  from './PettyCash';


export default function App() {
  
  const history = useHistory();
  const [mode, setMode] = useState("dark");


  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

 
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={1} style={{borderRadius: "0px", minHeight: "100vh"}}>
        <div className="App">
          
          <AppBar position="sticky">
            <Toolbar variant="dense">
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./home")}>Home</Button>
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./iplteams")}>IPL Teams</Button>
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./addteam")}>Add Team</Button>
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./pettycash")}>Petty-Cash</Button>

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
            <Route exact path="/ipl">
              <Redirect to='/iplteams' />
            </Route>

            <Route exact path="/pettycash">
              <PettyCash />
            </Route>
           

            <Route exact path="/iplteams/edit/:id">
              <EditTeam  />
            </Route>

            <Route exact path="/iplteams/:id">
              <TeamDetails />
            </Route>

            <Route exact path="/iplteams">
              <TeamList  /> 
            </Route>

            <Route exact path="/addteam">
                <AddTeam />
            </Route>

            <Route exact path="/home">
                <Welcome />
            </Route>

            <Route exact path="/">
                <LoginApp />
            </Route>

            

            <Route path="**">
              <NotFound />
            </Route>
          </Switch>      
        </div>
        </Paper>
     </ThemeProvider> 
  );
}






