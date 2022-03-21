import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./styles.css";
import Paper from '@mui/material/Paper';

import { useFormik } from "formik";
import * as yup from 'yup'

const formValidaionSchema= yup.object({
	firstname:yup.string().min(5).max(30).required("Please enter the required field"),
	lastname:yup.string().min(5).max(30).required("Please enter the required field"),	
	email:yup.string().required("Please enter the required field").matches(/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/, "Only alphabets are allowed for this field "),
	password:yup.string().min(8).max(30).required("Please enter the required field"),
	
	
  })

export default function Signup(){
	const history = useHistory();
	const formik = useFormik({
		initialValues: {
		  firstname:'', 
		  lastname:'',
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
		<Paper >
		<div className='signup_container'>
			<div className='signup_form_container'>
				<div className='signup_left'>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className='white_btn'>
							Sign in
						</button>
					</Link>
				</div>
				<div className='signup_right'>
					<form className='form_container' onSubmit={formik.handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							id="firstname"
							name="firstname"
							className='input'
							value={formik.values.firstname}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}	
							placeholder='Enter your firstname'
							variant="standard" 
							error={formik.errors.firstname && formik.touched.firstname}
							helperText={formik.errors.firstname && formik.touched.firstname && formik.errors.firstname}
						/>

						<input
							type="text"
							id="lastname"
							name="lastname"
							className='input'
							value={formik.values.lastname}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder='Enter the lastname'
							variant="standard" 
							error={formik.errors.lastname && formik.touched.lastname}
							helperText={formik.errors.lastname && formik.touched.lastname && formik.errors.lastname}
						/>
						
						<input
							type="email"
							id="email"
							name="email"
							className='input'
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder='Enter the email'
							variant="standard" 
							error={formik.errors.email && formik.touched.email}
							helperText={formik.errors.email && formik.touched.email && formik.errors.email}
						/>
						
						<input
							type="password"
							id="password"
							name="password"
							className='input'
							value={formik.values.password}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder='Enter the password'
							variant="standard" 
							error={formik.errors.password && formik.touched.password}
							helperText={formik.errors.password && formik.touched.password && formik.errors.password}
						/>
						
						
						
						<button type="submit" className='green_btn'>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
		</Paper>
	);
};


