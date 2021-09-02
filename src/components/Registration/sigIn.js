import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(15),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const history = useHistory();

	function handleSubmit(e) {
		e.preventDefault();

		//const email = e.target.email.value;
		//const password = e.target.password.value;

		axios.post('https://reqres.in/api/login', {
    		email: 'eve.holt@reqres.in',
    		password: "cityslicka",
		})
			.then(function (response) {
				localStorage.setItem('token', response.data.token);
				props.change_activePage("/users");
				history.push("/users"); 
		})
			.then(function (error) {
				console.error(error);
		});
  }

	return (
		<Container component="main" maxWidth="xs">
      		<CssBaseline />
      		<div className={classes.paper}>
        		<Avatar className={classes.avatar}>
          			<LockOutlinedIcon />
        		</Avatar>
        		<Typography component="h1" variant="h5">
          			Sign in
        		</Typography>
        		<form className={classes.form} noValidate onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Sign In
					</Button>
        		</form>
      		</div>
    	</Container>
  	);
}