import React from 'react';

import '../App.css';
import {Link} from 'react-router-dom';

function MyNav() {
  return (

      <div className="nav">
        <a className='left'>
        <Link to='/'> Главная</Link>
        <Link to='/account'> Аккаунт</Link>
        <Link to='/about'> О разработчиках</Link>
        </a>
        <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" draggable="false" display="false">
          <img src="MISIShunters.svg"className='right' draggable="false" width="50%"/>
        </a>

      </div>

  );
}

export default MyNav;

