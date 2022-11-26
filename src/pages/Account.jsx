import React from 'react';
import '../App.css';

const Auth = () => {

    return (
        
        <div>
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/> я студент <br/>
      <span>{checked ? <h1>geg</h1>
      : 
      'галочки нет'
      }</span>


        </div>
    );
};

export default Auth;
