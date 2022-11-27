import React from 'react';

import '../App.css';
import {Link} from 'react-router-dom';

function MyNav() {
  return (

    <div className='back'>
      <div className="nav">

        <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" draggable="false" display="false">
        <img src="/static/MISIShunters.svg"className='left' draggable="false" width="50%"/>
        </a>
        <br/>
        <a className='right'>
        <Link to='/' ><a > Главная&nbsp;&nbsp;&nbsp;</a></Link>
        
        <Link to='/account'><a > Аккаунт&nbsp;&nbsp;&nbsp;</a></Link>
        <Link to='/about'><a> О разработчиках&nbsp;&nbsp;&nbsp;</a></Link>
        </a>
        
      </div>
    </div>

  );
}

export default MyNav;

