// LICENSE_CODE DF
import React, {Fragment} from 'react';
import list_style from './list_side_bar.module.css';
import List_item from '../List_item/list_item';
import Remove_red_eye_icon from '@mui/icons-material/RemoveRedEye';
import Confirmation_number_icon from '@mui/icons-material/ConfirmationNumber';
import Lightbulb_icon from '@mui/icons-material/Lightbulb';
import Contact_emergency_icon from '@mui/icons-material/ContactEmergency';
import Support_agent_icon from '@mui/icons-material/SupportAgent';

const List_side_bar=props=>{
  const title_handler=props.title_handler;
  const icons = [
    {icon: <Remove_red_eye_icon/>},
    {icon: <Confirmation_number_icon />},
    {icon: <Contact_emergency_icon/>},
    {icon: <Support_agent_icon/>},
    {icon: <Support_agent_icon/>}
  ];
  const links=[
    {link: '/Overview'},
    {link: '/create-course'},
    {link: '/assignments'},
    {link: '/secuduled-online-classes'},
    {link: '/enrollment-request'},
  ];

  return <Fragment>
    <ul className={list_style.list}>
      <List_item item={
        {
          title: 'Overview',
          icon: icons[0].icon,
          link: links[0].link,
        }
      } title_handler={title_handler}/>
      <List_item item={
        {
          title: 'CAM Courses',
          icon: icons[1].icon,
          link: links[1].link,
        }
      } title_handler={title_handler}/>
      <List_item item={
        {
          title: 'Assignments',
          icon: icons[2].icon,
          link: links[2].link,
        }
      } title_handler={title_handler}/>
      <List_item item={
        {
          title: 'Online Classes',
          icon: icons[3].icon,
          link: links[3].link,
        }
      } title_handler={title_handler}/>
       <List_item item={
        {
          title: 'Requests',
          icon: icons[4].icon,
          link: links[4].link,
        }
      } title_handler={title_handler}/>
    </ul>
  </Fragment>;
};

export default List_side_bar;
