// LICENSE_CODE DF
import React, {Fragment, useEffect} from 'react';
import List_side_bar from './Side_Bar_List/list_side_bar_st';
import logo from '../../../assets/logo.png';
import side_bar_style from './side_bar.module.css';
import {Outlet, useNavigate} from 'react-router-dom';
import Menu_icon from '@mui/icons-material/Menu';
import Icon_button from '@mui/material/IconButton';
import {Avatar, Grid, Typography} from '@mui/material';


const Side_bar = props=>{
  let is_collapsed=props.collapsed;
  const set_is_collapsed=props.set_is_collapsed;
  const is_small_screen=props.screen;
  const title_handler=props.title_handler;
  const navigate = useNavigate();
  const collapsed_class = is_collapsed ? side_bar_style.collapsed : null;
  const sidebar_class = `${side_bar_style.side_bar} ${collapsed_class}`;
  const collapsed_handler=()=>{
    props.menu_handler();
  };
  useEffect(()=>{
    if (is_small_screen && !is_collapsed)
      set_is_collapsed(true);
    else
      set_is_collapsed(false);

  }, [is_small_screen]);
  return (
    <Fragment>
      <div className={sidebar_class}>
        <div
          className={side_bar_style.header}
        >
          <Grid container sx={{mt: 4}}>
            <Grid item lg={1} md={1} sm={1} xs={1}
              sx={{ml: is_collapsed ? 0.5: ''}}>
              <Icon_button
                onClick={collapsed_handler}
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
              >
                <Menu_icon fontSize="large" sx={{color: 'rgb(72, 73, 77)'}} />
              </Icon_button>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3} sx={{mt: 1}}
              onClick={()=>navigate('/overview')}>
              {!is_collapsed &&
              <Avatar src={logo} sx={{ml: 3, cursor: 'pointer'}}
                onClick=
                  {()=>{navigate('/overview');title_handler('Overview');}}/>}
            </Grid>
            <Grid item lg={8} md={8} sm={8} xs={8} sx={{mt: 2.3}}
              onClick={()=>{navigate('/overview');title_handler('Overview');}}>
              {!is_collapsed && <Typography variant="subtitle"
                sx={{mt: 1.1, ml: 2}}
                className={side_bar_style.dashboard_kit}>
           Smart Ed
              </Typography>}
            </Grid>
          </Grid>
        </div>
        <List_side_bar title_handler={title_handler} />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Side_bar;
