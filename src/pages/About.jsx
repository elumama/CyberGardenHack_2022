import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const About = () => {
    return (
        
        <div className='App'>

        <div className="container-fluid" >
            <form className="d-flex" style={{
            width: 100,
          }}>
                <input type="search" placeholder="Search"  name='query' />
                <button type="submit">Search</button>
             </form>

        </div>
      


           <table className="table1">
        <tr>
          <td>
          <a href="https://t.me/NeAlyssa" target="_blank" draggable="false"  display="false">
            <img src="alisa.png"className='left'draggable="false"  width="100%" float= "left"/>
            </a>
          </td>
          <td>
          <a href="https://t.me/BurykinaA" target="_blank" draggable="false" display="false">
            <img src="alina.png"className='left'draggable="false" width="100%" float= "left"/>
            </a>
          </td>
          <td>
          <a href="https://t.me/t0efL" target="_blank" draggable="false" display="false">
            <img src="vadim.png"className='left'draggable="false" width="100%" float= "left"/>
            </a>
          </td>
          <td>
          <a href="https://t.me/said_azizov" target="_blank" draggable="false" display="false">
            <img src="said.png"className='left'draggable="false" width="100%" float= "left"/>
            </a>
          </td>
          <td>
            
          <a href="https://t.me/kokosikEH" target="_blank" draggable="false" display="false">
            <img src="liza.png"className='left'draggable="false" width="100%" float= "left"/>
            </a>
          </td>
        </tr>
      </table>

        </div>
    );
};

export default About;
