'use client'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from './components/@copy';
import Typography from '@mui/material/Typography';
import * as AuthAPI from "./api/authenticate";
import axios from 'axios';
import { Form, useFormik } from 'formik';
import { singInSchema } from './schemas/singInSchema';

// TODO remove, this demo shouldn't need to reset the theme.

const initialValues = {
  email: "",
  password: ""
}

const defaultTheme = createTheme();

export default function SignInSide() {

  const getData = async (payload) => {

    let data = JSON.stringify(payload);
    console.log(data) //is convert into string....
    
    let config = {
      method: 'post',
      url: '/session/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data
    }
    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
      

  }


  const { values, errors, handleBlur, handleChange, handleSubmit, } = useFormik({
    initialValues: initialValues,
    validationSchema: singInSchema,
    onSubmit: (value, action) => {
      console.log("Form initialValues value is : ", values);
      getData(values);
      // action.resetForm();
    }

  })

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
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
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                variant="standard"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={<font color="red">{errors.email}</font>}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                variant="standard"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={<font color="red">{errors.password}</font>}
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
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/SingIn" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}