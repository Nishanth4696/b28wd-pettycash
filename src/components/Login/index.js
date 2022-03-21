import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./styles.css";
import TextField from '@mui/material/TextField';


import { useFormik } from "formik";
import * as yup from 'yup'

const formValidaionSchema= yup.object({
	
	email:yup.string().required("Please enter the required field").matches(/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/, "Only alphabets are allowed for this field "),
	password:yup.string().min(8).max(30).required("Please enter the required field"),
	
	
  })

export default function Login(){
	const history = useHistory();
	const formik = useFormik({
		initialValues: {
		  
		  email:'',
		  password:''
		},
		// validate: validateForm,
		validationSchema: formValidaionSchema,
		onSubmit: (newUser) => {
		  console.log("onSumbit", newUser)
		  addUser(newUser);
		}
	  });
	
	const addUser = (newUser) => {

		console.log("adding");
		
		console.log(newUser);
		
		  fetch("http://localhost:9000/login",
		  {
			method:"POST",
			body:JSON.stringify(newUser),
			headers:{'Content-Type':'application/json'},
		  })
		  .then(() => history.push("/login"))
	  };

	 
	return (
		
		<div className='login_container'>
			<div className='login_form_container'>
				<div className='login_left'>
				<form className='form_container' onSubmit={formik.handleSubmit}>
						<h1>Log In to Account</h1>
						
						
						<TextField
							type="email"
							name="email"
							className='input'
							
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							label='Enter the email'
							variant="outlined" 
							error={formik.errors.email && formik.touched.email}
							helperText={formik.errors.email && formik.touched.email && formik.errors.email}
							
							
							
							
						/>
						
						<TextField
							type="password"
							name="password"
							className='input'
							
							value={formik.values.password}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							label='Enter the password'
							variant="outlined" 
							error={formik.errors.password && formik.touched.password}
							helperText={formik.errors.password && formik.touched.password && formik.errors.password}
							/>
						
						
						
						<button type="submit" className='green_btn'>
							Sign In
						</button>
					</form>
				</div>
				<div className='login_right'>
				<h1>Welcome Back</h1>
					<Link to="/signup">
						<button type="button" className='white_btn'>
							Sign Up
						</button>
					</Link>
					
				</div>
			</div>
		</div>
		
	);
};


