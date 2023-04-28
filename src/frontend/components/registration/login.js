// LICENSE_CODE DF
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Css_baseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../../../assets/logo.png";
import style from "./registration.module.css";
import Input_label from "@mui/material/InputLabel";
import Input_adornment from "@mui/material/InputAdornment";
import Icon_button from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Outlined_input from "@mui/material/OutlinedInput";
import { useFormik } from "formik";
import * as yup from "yup";
import Form_helper_text from "@mui/material/FormHelperText";
import { FormControl } from "@mui/material";
import { Google, Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import dbForAuthentication from "../../../backend/firestore";

const theme1 = createTheme({});

const Login = (props) => {
  const navigate = useNavigate();
  const [status, set_status] = useState(null);
  const [auth_error_str, set_auth_error_str] = useState("");
  const [show_password, set_show_password] = useState(false);
  const handle_click_show_password = () => set_show_password(!show_password);
  const handle_mouse_down_password = (event) => event.preventDefault();
  const login_handler = props.login_handler;
  const validation_schema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validation_schema,
    onSubmit: async (values) => {
      const email = values.email;
      const password = values.password;

      const all_users = await dbForAuthentication.read_user();
      console.log(all_users);
      let status = null;
      all_users.forEach((st) => {
        if (st.email == email && st.password == password) {
          status = st.status;
          return;
        }
      });
      if(status=='student'){
        navigate('/view-courses')
      }
      if(status=='teacher'){
        navigate('/dashboard');
      }
      console.log(status);
      console.log(email, password);
    },
  });
  const button_style = {
    height: "5vh",
    width: "35vh",
    bottom: "0px",
    background: "#02a2a2",
    boxShadow: "0px 4px 12px rgba(55, 81, 255, 0.24)",
    borderRadius: "8px",
    cursor: "pointer",
    color: "#ffffff",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "16px",
    borderColor: "none",
    outline: "none",
  };
  return (
    <ThemeProvider theme={theme1}>
      <Container
        className={style.layout}
        component="main"
        maxWidth="string"
        maxheight="string"
      >
        <div>
          <h1 style={{ opacity: "0", marginTop: "0px" }}>.</h1>
        </div>
        <Container
          component="main"
          maxWidth="xs"
          maxheight="xs"
          className={style.model}
          disableGutters={true}
          sx={{
            marginTop: 18,
            height: "auto",
            minHeight: "600px",
          }}
        >
          <Css_baseline />
          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Logo"
              src={logo}
              sx={{ mt: 1, width: 43, height: 43 }}
            />
            <Typography
              component="h1"
              variant="h5"
              className={style.dashboard_kit}
            >
              Dashboard Kit
            </Typography>
            <Typography
              component="h1"
              variant="h5"
              className={style.log_in}
              sx={{ marginTop: 3.5, marginBottom: 1.5 }}
            >
              Log in to Dashboard Kit
            </Typography>
            {/* <FormControl>
              <Button
                fullWidth
                disableElevation={true}
                variant="outlined"
                onClick={async () => {
                  if (await authorization.sign_up_with_goggle()) {
                    navigate("/board");
                  }
                }}
                sx={{
                  margin: "25px 0 0",
                  border: "1px solid #a4a6b3",
                  backgroundColor: "#fff",
                  color: "#333",
                  "&:hover": {
                    backgroundColor: "#eee",
                  },
                }}
                startIcon={<Google />}
              >
                <Typography variant="button">Sign in with Google</Typography>
              </Button>
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  mt: 2,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                or
              </Typography>
            </FormControl> */}
            <Typography
              component="h1"
              variant="subtitle1"
              className={style.enter_email && style.color}
            >
              Enter your email and password below
            </Typography>
            {auth_error_str && (
              <Typography variant="subtitle1" sx={{ color: "#c62828", mt: 2 }}>
                {auth_error_str}
              </Typography>
            )}
            <Box sx={{ marginTop: 5 }}>
              <Stack
                component="form"
                noValidate
                autoComplete="off"
                sx={{ width: "330px" }}
                onSubmit={formik.handleSubmit}
              >
                <Input_label className={style.label && style.color}>
                  Email
                </Input_label>
                <FormControl>
                  <Outlined_input
                    id="email"
                    type="email"
                    sx={{ mt: 2 }}
                    placeholder="Email"
                    variant="outlined"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                  />
                  <Form_helper_text
                    sx={{ color: "red" }}
                    id="component-error-text"
                  >
                    {formik.touched.email && formik.errors.email}
                  </Form_helper_text>
                </FormControl>
                <Grid container sx={{ marginTop: 3, marginBottom: 1 }}>
                  <Grid item xs>
                    <Input_label className={style.label}>Password</Input_label>
                  </Grid>
                  <Grid item>
                    <Link
                      href="#"
                      variant="body2"
                      underline="none"
                      color="#9fa2b4"
                    >
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
                <FormControl>
                  <Outlined_input
                    id="password"
                    type={show_password ? "text" : "password"}
                    sx={{ mt: 2 }}
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    endAdornment={
                      <Input_adornment position="end">
                        <Icon_button
                          aria-label="toggle password visibility"
                          onClick={handle_click_show_password}
                          onMouseDown={handle_mouse_down_password}
                          edge="end"
                        >
                          {show_password ? <Visibility /> : <VisibilityOff />}
                        </Icon_button>
                      </Input_adornment>
                    }
                  />
                  <Form_helper_text
                    sx={{ color: "red" }}
                    id="component-error-text"
                  >
                    {formik.touched.password && formik.errors.password}
                  </Form_helper_text>
                </FormControl>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    ...button_style,
                    "&:hover": {
                      backgroundColor: "#02a2a2",
                    },
                  }}
                >
                  Log in
                </Button>
                <Grid container sx={{ ml: 8.3 }}>
                  <Grid item>
                    <Link
                      href="#"
                      variant="body2"
                      underline="none"
                      color="#9fa2b4"
                    >
                      {"Don't have an account?"}
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      href="#"
                      variant="body2"
                      underline="none"
                      className={style.sign_up && style.background_color}
                      sx={{ ml: 1 }}
                      color="#3751ff"
                      onClick={() => {
                        navigate("/signup");
                      }}
                    >
                      Sign Up
                    </Link>
                  </Grid>
                </Grid>
              </Stack>
              <div style={{ height: "30px" }}></div>
            </Box>
          </Box>
        </Container>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
