import React from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory} from 'react-router-dom';
import App from './App.js'
import { useState} from 'react';



export function LoginApp() {
  const history = useHistory();
  
  
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
 
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
 

  // User Login info  
  const database = [
    {
      email: "testuser1@gmail.com",
      password: "testuser1"
    },
    {
      email: "testuser2@gmail.com",
      password: "testuser2"
    },
   
  ];

  const errors = {
    email: "invalid username",
    password: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { email, password } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.email === email.value);

    // Compare user info
    if (userData) {
      if (userData.password !== password.value) {
        // Invalid password
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "email", message: errors.email });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) => name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );
  const [box, setBox] = useState("none");
  
const styles = {display: box, fontWeight:'bold'};

  // JSX code for login form
  const renderForm = (
    <div className='login_container'>
			
 			<div className='login_form_container'>
			
 				<div className='login_left'>
           
				
				<form className='form_container' onSubmit={handleSubmit}>
 						<h1>Log In to Account</h1>
						
						
 						<TextField
							type="email"
							id="email"
							name="email"							
							className='input'
              value={email}	
              onChange={(event) => setEmail(event.target.value)}					
							placeholder='Enter the email'
							variant="outlined" 
							
						/>
            {renderErrorMessage("email")}
						
						<TextField
							type="password"
							id="password"
							name="password"							
							className='input'	
              value={pass}	
              onChange={(event) => setPass(event.target.value)}						
							placeholder='Enter the password'
							variant="outlined" 
						
						/>
            {renderErrorMessage("password")}
						
						
						
						
						<Button   variant="contained" type='submit' onClick={() => history.push('./home')} >
							Sign In
						</Button>

            
					</form>
					<Button variant="contained" style={{marginLeft:'auto'}} type='button'  onClick={() =>setBox((box ==='none') ? 'block' : 'none')} >Demouser<NavigateNextIcon/> </Button>
        </div>
        <div className="login_right" style={styles}>
              <h3 styles={{marginLeft:'10px'}}>Demo Credientials</h3> 
              <div>
              
              <h2>User Login</h2>
              <div >
                <h3 style={{color:'red'}}>email:</h3><p style={{fontSize:'24px'}}>testuser1@gmail.com </p>
                <h3 style={{color:'red'}}>pass:</h3><p style={{fontSize:'24px'}}>testuser1 </p>
              </div>
             
              </div>
				</div>
				
				
			</div>
		</div>
  );
  
 

 
  return (
    
    <div className="app">
      
        <div className="login-form">
          
          {isSubmitted ? <App /> : renderForm }
         
          
        </div>

       
      
    </div>
    
  );
}

