import React, { useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function About() {
  useEffect(() => {
    document.getElementById("kek").volume = 1;
  }, [])
  return (

    <div className='App'>
      <div >

        <h2>описание</h2>
        <br />
        тут будет описание продукта
        <br />
        а пока вот анекдот: не покупайте кольца кальмаров возле синагоги. Это не кальмары!
        <br />
        <a href="https://t.me/TIMAcceleratorBot" target="_blank" draggable="false" display="false">
          <img src="tg_logo.svg" className="logo " draggable="false" width="100px" float="left" />
        </a>
      </div>
      <audio id="kek" style={{ display: "none" }} autoPlay loop={true}>
        <source src="public/ferrari.ogg" type="audio/ogg" />
        <source src="public/ferrari.mp3" type="audio/mpeg" />
      </audio>
      <table className="table1">
        <tr>
          <td>
            <a href="https://t.me/NeAlyssa" target="_blank" draggable="false" display="false">
              <img src="alisa.png" className='left' draggable="false" width="100%" float="left" />
            </a>
          </td>
          <td>
            <a href="https://t.me/BurykinaA" target="_blank" draggable="false" display="false">
              <img src="alina.png" className='left' draggable="false" width="100%" float="left" />
            </a>
          </td>
          <td>
            <a href="https://t.me/t0efL" target="_blank" draggable="false" display="false">
              <img src="vadim.png" className='left' draggable="false" width="100%" float="left" />
            </a>
          </td>
          <td>
            <a href="https://t.me/said_azizov" target="_blank" draggable="false" display="false">
              <img src="said.png" className='left' draggable="false" width="100%" float="left" />
            </a>
          </td>
          <td>

            <a href="https://t.me/kokosikEH" target="_blank" draggable="false" display="false">
              <img src="liza.png" className='left' draggable="false" width="100%" float="left" />
            </a>
          </td>
        </tr>
      </table>
    </div>

  );
};

export default About;
