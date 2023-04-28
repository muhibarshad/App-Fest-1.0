// LICENSE_CODE DF
import { Typography, Avatar, Button, FormControl } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import style from "./registration.module.css";
import logo from "../../../assets/logo.png";
import { Google, Visibility, VisibilityOff } from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Input_adornment from "@mui/material/InputAdornment";
import Icon_button from "@mui/material/IconButton";
import Outlined_input from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import { useFormik } from "formik";
import * as yup from "yup";
import Form_helper_text from "@mui/material/FormHelperText";
import { useNavigate } from "react-router-dom";
import dbForAuthentication from "../../../backend/firestore";

const Signup = (props) => {
  const navigate = useNavigate();
  const [show_password, set_show_password] = useState(false);
  const handle_click_show_password = () => set_show_password(!show_password);
  const handle_mouse_down_password = (event) => event.preventDefault();
  const [show_confirm_password, set_show_confirm_password] = useState(false);
  const handle_click_show_confirm_password = () =>
    set_show_confirm_password(!show_confirm_password);
  const handle_mouse_down_confirm_password = (event) => event.preventDefault();
  const validation_schema = yup.object({
    firstName: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    confirmPassword: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Confirm Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validation_schema,
    onSubmit: (values) => {
      const email = values.email;
      const name = values.firstName;
      const status = values.lastName.toLowerCase();
      const password = values.password;

      if (dbForAuthentication.add_user(name, email, password, status)) {
        if(status=='student'){
          navigate("/view-courses");
        }
        if(status=='teacher'){
          navigate("/dashboard");
        }
        console.log(email, status, name, password);
      }
      console.log(email, status, name, password);
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
    <>
      <Container
        disableGutters={true}
        className={style.layout}
        component="main"
        maxWidth="string"
        maxheight="string"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          className={style.model}
          sx={{
            height: "auto",
            minHeight: "690px",
            minWidth: "450px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: 2,
          }}
        >
          <Avatar alt="Logo" src={logo} sx={{ mt: 1, width: 43, height: 43 }} />
          <Typography
            component="h1"
            sx={{ pt: 1 }}
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
            Sign up to Dashboard Kit
          </Typography>
          <Stack
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}
          >
            {/* <FormControl>
              <Button
                fullWidth
                disableElevation={true}
                variant="outlined"
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
                <Typography variant="button">Sign Up with Google</Typography>
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
            <FormControl>
              <Outlined_input
                id="firstName"
                type="text"
                sx={{ mt: 2, width: "40ch" }}
                placeholder="Full Name"
                variant="outlined"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
              />
              <Form_helper_text sx={{ color: "red" }} id="component-error-text">
                {formik.touched.firstName && formik.errors.firstName}
              </Form_helper_text>
            </FormControl>
            <FormControl>
              <Outlined_input
                id="lastName"
                type="text"
                sx={{ mt: 2 }}
                placeholder="As a student/teacher/Institute"
                variant="outlined"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
              />
              <Form_helper_text sx={{ color: "red" }} id="component-error-text">
                {formik.touched.lastName && formik.errors.lastName}
              </Form_helper_text>
            </FormControl>
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
              <Form_helper_text sx={{ color: "red" }} id="component-error-text">
                {formik.touched.email && formik.errors.email}
              </Form_helper_text>
            </FormControl>
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
              <Form_helper_text sx={{ color: "red" }} id="component-error-text">
                {formik.touched.password && formik.errors.password}
              </Form_helper_text>
            </FormControl>
            <FormControl>
              <Outlined_input
                id="confirmPassword"
                type={show_confirm_password ? "text" : "password"}
                sx={{ mt: 2 }}
                placeholder="Confirm Password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                endAdornment={
                  <Input_adornment position="end">
                    <Icon_button
                      aria-label="toggle password visibility"
                      onClick={handle_click_show_confirm_password}
                      onMouseDown={handle_mouse_down_confirm_password}
                      edge="end"
                    >
                      {show_confirm_password ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </Icon_button>
                  </Input_adornment>
                }
              />
              <Form_helper_text sx={{ color: "red" }} id="component-error-text">
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword}
              </Form_helper_text>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                ml: 2,
                ...button_style,
                "&:hover": {
                  backgroundColor: "#02a2a2",
                },
              }}
            >
              Create an Account
            </Button>
            <Grid container sx={{ ml: 10.5 }}>
              <Grid item>
                <Link href="#" variant="body2" underline="none" color="#9fa2b4">
                  Already have an account?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  underline="none"
                  className={style.sign_up}
                  sx={{ ml: 1 }}
                  color="#3751ff"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Log in
                </Link>
              </Grid>
            </Grid>
          </Stack>
          <div style={{ height: "30px" }}></div>
        </Box>
      </Container>
    </>
  );
};

export default Signup;
