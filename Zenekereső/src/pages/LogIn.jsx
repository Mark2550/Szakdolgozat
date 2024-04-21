import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../context/Authentication';
import axios from '../api/axios';

import { Link } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © Zenekereső '} {new Date().getFullYear()}
    </Typography>
  );
}

const LOGIN_URL = '/auth';

const LogIn = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrorMsg('');
  }, [user, password])


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({ user, password }),
        {
          headers: { 'Content-type': 'application/json' },
          withCredentials: true
        }
      );
      console.log(JSON.stringify(response?.data));
      console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;

      setAuth({ user, password, roles, accessToken });
      setUser('');
      setPassword('');
      setSuccess(true);
      {/** 
          Fontos, ha nem a neveknek megfelelő tag/id-t adtunk meg az input mezőkben, akkor újra kell struktúrálni
          (Username: <user>, Password: <változónak megfelelő név>) 
      */}

    } catch (err) {
      if (!err?.response) {
        setErrorMsg('No server response');
      } else if (err?.response?.status == 400) {
        setErrorMsg('Missing username or password');
      } else if (err?.response?.status == 401) {
        setErrorMsg('Unauthorized');
      }else {
        setErrorMsg('Login failed');
      }
      errRef.current.focus();
    }

    if (success) {
      alert("sikeres bejelentkezés");
    }
  };

  return (
    <div>
      <CssBaseline />
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <p ref={errRef} className={errorMsg ? "errmsg" : "offscreen"} aria-live='assertive'>{errorMsg}</p>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              htmlFor="username"
              margin="normal"
              required
              fullWidth
              name="username"
              label="Username"
              type='text'
              id="username"
              autoComplete="off"
              autoFocus

              ref={userRef}
              onChange={(e) => setUser(e.target.value)}
              value={user}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"

              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
                <Link to={"/ForgotPassword"} variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to={"/Register"} variant="body2">
                  New here? Register!
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      </div>
  );
}

export default LogIn