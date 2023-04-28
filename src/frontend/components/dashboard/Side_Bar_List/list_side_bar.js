// LICENSE_CODE DF
import React, {Fragment} from 'react';
import list_style from './list_side_bar.module.css';
import List_item from '../List_item/list_item';
import Remove_red_eye_icon from '@mui/icons-material/RemoveRedEye';
import Confirmation_number_icon from '@mui/icons-material/ConfirmationNumber';
import Lightbulb_icon from '@mui/icons-material/Lightbulb';
import Contact_emergency_icon from '@mui/icons-material/ContactEmergency';
import Support_agent_icon from '@mui/icons-material/SupportAgent';
import Library_books_icon from '@mui/icons-material/LibraryBooks';
import Settings_icon from '@mui/icons-material/Settings';
import Workspace_premium_icon from '@mui/icons-material/WorkspacePremium';

const List_side_bar=props=>{
  const title_handler=props.title_handler;
  const icons = [
    {icon: <Remove_red_eye_icon/>},
    {icon: <Confirmation_number_icon />},
    {icon: <Lightbulb_icon/>},
    {icon: <Contact_emergency_icon/>},
    {icon: <Support_agent_icon/>},
    {icon: <Library_books_icon/>},
    {icon: <Settings_icon/>},
    {icon: <Workspace_premium_icon/>},
  ];
  const links=[
    {link: '/Overview'},
    {link: '/Tickets'},
    {link: '/Ideas'},
    {link: '/Contacts'},
    {link: '/Agents'},
    {link: '/Articles'},
    {link: '/Settings'},
    {link: '/Subscription'},
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
          title: 'Create Course',
          icon: icons[1].icon,
          link: links[1].link,
        }
      } title_handler={title_handler}/>
      <List_item item={
        {
          title: 'Manage Course',
          icon: icons[2].icon,
          link: links[2].link,
        }
      } title_handler={title_handler}/>
      <List_item item={
        {
          title: 'Assignments',
          icon: icons[3].icon,
          link: links[3].link,
        }
      } title_handler={title_handler}/>
      <List_item item={
        {
          title: 'Online Classes',
          icon: icons[4].icon,
          link: links[4].link,
        }
      } title_handler={title_handler}/>
      {/* <List_item item={
        {
          title: 'Articles',
          icon: icons[5].icon,
          link: links[5].link,
        }
      } title_handler={title_handler}/>
      <hr className={list_style.hr}/>
      <List_item item={
        {
          title: 'Settings',
          icon: icons[6].icon,
          link: links[6].link,
        }
      } title_handler={title_handler}/>
      <List_item item={
        {
          title: 'Subscription',
          icon: icons[7].icon,
          link: links[7].link,
        }
      } title_handler={title_handler}/> */}
    </ul>
  </Fragment>;
};

export default List_side_bar;
