// LICENSE_CODE DF
import React, {Fragment} from 'react';
import {useNavigate} from 'react-router-dom';
import list_item from './list_item.module.css';

const List_item=props=>{
  const {link, icon, title}=props.item;
  const title_handler=props.title_handler;
  const navigate=useNavigate();
  const item_handler=()=>{
    navigate(link);
    title_handler(title);
  };
  return <Fragment>
    <li>
      <button className={list_item.list_item}
        onClick={item_handler}>
        <span className={list_item.Icon}>{icon}</span>
        <span className={list_item.title}>{title}</span>
      </button>
    </li>
  </Fragment>;
};

export default List_item;
