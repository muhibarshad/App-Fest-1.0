import React, { useState, useEffect } from "react";
import Side_bar from "./side_bar";
import Page_header from "./page_header";
import { Grid } from "@mui/material";

const Dashboard = () => {
  const [title, set_title] = useState("Overview");
  const obj = {
    title: title,
    name: "Muhib",
    image: "./Assets/img1.jpg",
  };
  const title_handler = (title_name) => {
    set_title(title_name);
  };
  const [is_collapsed, set_is_collapsed] = useState(false);
  const collapsed_handler = () => {
    set_is_collapsed(!is_collapsed);
  };
  const [screen_width, set_screen_width] = useState(window.innerWidth);

  useEffect(() => {
    const handle_resize = () => set_screen_width(window.innerWidth);
    window.addEventListener("resize", handle_resize);
    return () => window.removeEventListener("resize", handle_resize);
  }, [screen_width]);

  const is_small_screen = screen_width <= 1081 ? true : "";
  return (
    <>
      <Grid container sx={{ background: "#F7F8FC" }}>
        <Grid item xs={12} md={2} sm={12}>
          <Side_bar
            collapsed={is_collapsed}
            menu_handler={collapsed_handler}
            screen={is_small_screen}
            set_is_collapsed={set_is_collapsed}
            title_handler={title_handler}
          />
        </Grid>
        <Grid item xs={12} md={12} sm={12} sx={{ ml: 6 }}>
          <Page_header
            details={obj}
            collapsed={is_collapsed}
            screen={is_small_screen}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
