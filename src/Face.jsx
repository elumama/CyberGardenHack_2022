import { FaceMesh } from "@mediapipe/face_mesh";
import React, { useRef, useEffect, useState } from "react";
import * as Facemesh from "@mediapipe/face_mesh";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import './App.css';
// import {
//   drawConnectors,
//   drawLandmarks,
// } from '@mediapipe/drawing_utils/drawing_utils';

function Face() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [aiEnabled, setAiEnabled] = useState(false);
  const [timer, setTimer] = useState(0);
  var person_exists = false;
  var date_person_here = new Date();
  var time_person_left = 0;
  const [timePersonLeft, setTimePersonLeft] = useState(0);
  const [dieTime, setDieTime] = useState(900);
  const increment = useRef(null)
  const [check, setCheck] = useState("no");
  const handleStart = () => {
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
    setAiEnabled((aiEnabled) => !aiEnabled)
    console.log(aiEnabled)
  }

  function inc(time_elapsed) {
    setTimePersonLeft(timePersonLeft + time_elapsed)
  }
  function dec(time_elapsed) {
    setDieTime(dieTime - time_elapsed)
  }
  function nul(a) {
    if(a){
      setTimePersonLeft(0);
    setDieTime(900);
    }
  }

  function checking(person_detected) {
    person_detected? setCheck("✅"): setCheck("⛔️")
    // if(a) {setCheck("✅");}
    // else {setCheck("⛔️");}
  }


  const formatTime = (timers) => {
    const getSeconds = `0${(timers % 60)}`.slice(-2)
    const minutes = `${Math.floor(timers / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timers / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  function msToSec(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60)
      return seconds;
  }


  
  
  useEffect(() => {
    const onResults = (results) => {
      // const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set canvas width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const canvasElement = canvasRef.current;
      const canvasCtx = canvasElement.getContext("2d");
      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      canvasCtx.drawImage(
        results.image,
        0,
        0,
        canvasElement.width,
        canvasElement.height
      );
      
      if (results.multiFaceLandmarks && aiEnabled) {
        if (results.multiFaceLandmarks.length){
          //console.log("person")
          person_exists = true;

          setTimePersonLeft(0);
          date_person_here = new Date();
      } else {
              time_person_left = new Date() - date_person_here
              //console.log(msToSec(time_person_left))
          
          //console.log("no person")
          person_exists = false;
        }
        inc(msToSec(time_person_left));
        dec(msToSec(time_person_left));
        checking(person_exists);
        nul(person_exists);
        

      }
      canvasCtx.restore();
      
    }

    const faceMesh = new FaceMesh({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
      },
    });

    faceMesh.setOptions({
      maxNumFaces: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

faceMesh.onResults(onResults);


    const camera = new cam.Camera(webcamRef.current.video, {
      onFrame: async () => {
        await faceMesh.send({ image: webcamRef.current.video });
      },
      width: 640,
      height: 480,
    });
    camera.start();
    webcamRef.current = camera;
  }, [aiEnabled]);

  useEffect(() => {
    const camera = new cam.Camera(webcamRef.current.video, {
      onFrame: () => { },
      width: 640,
      height: 480,
    });
    camera.start();
    webcamRef.current = camera;
  }, [])


  return (
    <div className="allPage"> 

      <table className="table1">
        <tbody>
        <tr>
          <td className="td1">
          <a>all time</a>
          </td>
          <td className="td1">
          <a>time remaining</a>
          </td>
          <td className="td1">
          <a>time skipped</a>
          </td>
          <td className="td1">
          <a>proctoring</a>
          </td>
        </tr>
        <tr>
          <td className="td1">
          <a>{formatTime(timer)}</a>
          </td >
          <td className="td1">
          <a>{formatTime(dieTime)}</a>
          </td>
          <td className="td1">
          <a>{formatTime(timePersonLeft)}</a>
          </td>
          <td className="td1">
          <a>{check}</a>
          </td>
        </tr>
        </tbody>
      </table>



      <div className="App column">
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
            borderRadius: 5,
          }}
        />{" "}
        <canvas
          ref={canvasRef}
          className="output_canvas"
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
            borderRadius: 5,
          }}
        ></canvas>


      </div>

      

      
          <button style={{
          marginTop: "500px",
          // zIndex: 1000,
        }} onClick={handleStart}>Start</button>                  
        
    </div >
  );
}

export default Face;