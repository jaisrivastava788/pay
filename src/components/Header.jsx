import React from 'react';
import { Avatar } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Header() {
   
    return (
    <div className="header">
      <ArrowBackIcon style={{paddingRight:"5px"}}/>
      <Avatar  alt="Jai" src=" "/>
      <div className="data"> <p>Jhon</p><p >7452089413</p></div>
     
     </div>
    )
}

export default Header;
