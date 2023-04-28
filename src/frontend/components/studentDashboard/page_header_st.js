// LICENSE_CODE DF
import React, { useState } from "react";
import style from "./page_header.module.css";
import { AppBar, Avatar, Toolbar, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Notifications_icon from "@mui/icons-material/Notifications";
import { styled } from "@mui/material/styles";
import Icon_button from "@mui/material/IconButton";
import Input_base from "@mui/material/InputBase";
import Search_icon from "@mui/icons-material/Search";
// import img from './Assets/img1.jpg';
import ProfileCard from "../dashboard/profileCard";
import AlertDismissibleExample from "./notification";

const Page_header = (props) => {
  const { title, name, image } = props.details;
  const [isNotify, set_is_notify] = useState(false);
  const [profile_show, set_profile_show] = useState(false);
  const collapsed = props.collapsed;
  const search_handler = () => {
    set_is_search(!is_search);
  };
  const [is_search, set_is_search] = useState(false);
  const Styled_input_base = styled(Input_base)(({ theme }) => ({
    color: "black",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  const is_small_screen = props.screen;
  const drawer_width = collapsed ? 50 : 255;
  const profileHandler = () => {
    set_profile_show(!profile_show);
  };
  const notifyHandler = () => {
    set_is_notify(true);
  };

  return (
    <AppBar
      sx={{
        width: `calc(100% - ${drawer_width}px)`,
        height: "10vh",
        backgroundColor: "#F7F8FC;",
      }}
      elevation={0}
    >
      <Toolbar sx={{ height: "10vh", color: "white" }}>
        <Typography
          variant="h5"
          sx={{ flexGrow: 1 }}
          className={style.heading && style.color}
        >
          {title}
        </Typography>
        {is_search && (
          <Styled_input_base
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            autoFocus
            sx={{ ml: is_small_screen ? -5 : 0 }}
          />
        )}
        <Icon_button
          sx={{ color: "#C5C7CD", mr: is_small_screen ? -1 : 3 }}
          onClick={search_handler}
        >
          <Search_icon />
        </Icon_button>
        <Icon_button
          sx={{ color: "#C5C7CD", mr: is_small_screen ? -1 : 4 }}
          onClick={notifyHandler}
        >
          <Notifications_icon />
        </Icon_button>
        {!is_small_screen && (
          <Divider
            orientation="vertical"
            variant="middle"
            sx={{ border: "1px solid #DFE0EB", mr: 4, height: "5vh", mt: 3 }}
          />
        )}
        {!is_small_screen && (
          <Typography variant="h6" className={style.user_name && style.color}>
            {name}
          </Typography>
        )}
        {profile_show && <ProfileCard />}
        <Avatar
          src={image}
          sx={{ ml: 2, cursor: "pointer" }}
          onClick={profileHandler}
        />
      </Toolbar>
      {isNotify && <AlertDismissibleExample />}
    </AppBar>
  );
};

export default Page_header;
