import React, { Component, Fragment } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from "@material-ui/core/FormControl";
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import logo from '../images/logo.jpg'
import { Redirect } from 'react-router-dom'

import { connect } from "react-redux";
import {getLoginRequest} from '../redux/actions';
import { Formik, Form, Field } from 'formik';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const styles = theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://media.glassdoor.com/l/fd/ab/31/06/the-editorial-and-content-area.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

});

class Login extends Component {
  state={
    token:null
}
submitScreen=(values)=>{
     this.props.getLogin(values)
     let tokenVal=this.props.login_token && this.props.login_token  
    // console.log(tokenVal,'tokenVal');
     
     this.setState({token:tokenVal})
      
}

componentDidUpdate(){ 
  if(this.props.login_token.token!==undefined){
      this.props.history.push(`/home`)
  } else{
    setTimeout(()=>{
      toast.error("Invalid Login Credentials !");
    },2000)
  }
}

  render() {
   const{classes}=this.props;
   
   
  return (
    <Grid container component="main" className={classes.root}>
       <ToastContainer />
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
         
            <img src={logo}/>
            USERNAME : eve.holt@reqres.in
            <br/>
            PASSWORD : cityslicka
          <Typography component="h1" variant="h5">
            Introducing Homes
          </Typography>
          <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                   // validationSchema={customFormValidation}
                    enableReinitialize
                    onSubmit={(values, { resetForm }) => {
                        this.submitScreen(values, { resetForm });
                    }}
                >
                  {({ errors, touched, isValidating, handleChange, values, setFieldValue }) => {
                        return (
                            <Form>
                      <FormControl margin="normal" required fullWidth>
                                        <TextField
                                            name="email"
                                            label="Username"
                                            variant="outlined"
                                            margin='normal'
                                            fullWidth
                                            onChange={handleChange}
                                            value={values.email}
                                        />
                                    </FormControl>
                                    <FormControl margin="normal" required fullWidth>
                                        <TextField
                                            name="password"
                                            label="Password"
                                            variant="outlined"
                                            margin='normal'
                                            fullWidth
                                            onChange={handleChange}
                                            value={values.password}
                                        />
                                    </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
                            </Form>

                        );
                    }}

          {/* <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
           
           
          </form> */}
          </Formik>
        </div>
      </Grid>
    </Grid>
  );
}
}

const mapStateToProps = state => ({
  
  login_token: state.logindetails.logindata.data,

});
const mapDispatchToProps = dispatch => ({
 
  getLogin: (data) => dispatch(getLoginRequest(data))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Login));