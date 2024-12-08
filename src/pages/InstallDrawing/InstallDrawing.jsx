import React from 'react';
import { useState, useEffect, useRef } from 'react';
import * as XLSX from "xlsx";
import excelFile from "../../assets/Data/PDF Builder.xlsx";

function InstallDrawing() {

   // states to hold each data and use it on click
  const [screenData, setScreenData] = useState([]);
  const [mediaPlayerData, setMediaPlayerData] = useState([]);
  const [mountsData, setMountsData] = useState([]);
  const [recpBoxData, setRecpBoxData] = useState([]);
  const [selectedScreen, setSelectedScreen] = useState("");
  const [selectedmediaP, setSelectedMediaP] = useState("");
  const [selectedmount, setSelectedmount] = useState("");
  const [selectedRecpBox, setSelectedRecpBox] = useState("");
  const canvasRef = useRef(null);
  
  // fecthing data from javscript and converting it to JSON 
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(excelFile);
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const screenSheetName = workbook.SheetNames[0]; 
      const screenSheet = workbook.Sheets[screenSheetName]; 
      const jsonData = XLSX.utils.sheet_to_json(screenSheet); 
      setScreenData(jsonData); 
      const mediaPlayerSheetName = workbook.SheetNames[1];
      const mediaPlayerSheet = workbook.Sheets[mediaPlayerSheetName];
      const mediaPData = XLSX.utils.sheet_to_json(mediaPlayerSheet);
      setMediaPlayerData(mediaPData);
      const mountsSheetName = workbook.SheetNames[2];
      const mountSheet = workbook.Sheets[mountsSheetName];
      const mountsData = XLSX.utils.sheet_to_json(mountSheet);
      setMountsData(mountsData);
      const recpBoxSheetName = workbook.SheetNames[3];
      const recpBoxSheet = workbook.Sheets[recpBoxSheetName];
      const recpBoxData = XLSX.utils.sheet_to_json(recpBoxSheet);
      setRecpBoxData(recpBoxData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedScreen) {
      const selectedData = screenData.find(
        (row) => row["Screen MFR"] === selectedScreen
      );
      console.log("selectedScreen", selectedScreen)
      console.log("selectedData",selectedData)
      if (selectedData) {
        const { Height, Width } = selectedData;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // scale in canvas works with pixcel, for visually rigth scale increase the width and hight
        let newWidth = 18*Width;
        let newHeight = 18*Height;
       
        //increasing niche(2.5") proportional to increased height and width.
        let newNiche = 18*2.5

        // to get rec in center of screen 
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const rect1X = centerX - (newWidth/2);
        const rect1Y = centerY - (newHeight/2);

         // to get niche rec in center of screen 
         const nicheRect1X = centerX - (newWidth/2+newNiche/2);
         const nicheRrect1Y = centerY - (newHeight/2+newNiche/2);
        
        ctx.lineWidth = 10; 

        ctx.strokeRect(rect1X, rect1Y, newWidth, newHeight);

        ctx.lineWidth = 2; // Set a different line width for the second rectangle
        ctx.strokeRect(nicheRect1X, nicheRrect1Y, newWidth+newNiche, newHeight+newNiche);

   
      }
    }
  }, [selectedScreen, screenData]);

  return (
    <div>
      <h2>
        Configuration
      </h2>
      <div>
        <label htmlFor='screenMfr'>Screen</label>
        <select
          id="screenMfr"
          value={selectedScreen}
          onChange={(e) => setSelectedScreen(e.target.value)}
        >
          <option value="">-- Select a Screen MFR --</option>
          {screenData.map((row, index) => (
            <option key={index} value={row["Screen MFR"]}>
              {row["Screen MFR"]}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor='mediaPlayer'>Media Player</label>
        <select
          id="mediaPlayer"
          value={selectedmediaP}
          onChange={(e) => setSelectedMediaP(e.target.value)}
        >
          <option value="">-- Select a Media Player --</option>
          {mediaPlayerData.map((row, index) => (
            <option key={index} value={row["MFG. PART"]}>
              {row["MFG. PART"]}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor='mount'>Mount</label>
        <select
          id="mount"
          value={selectedmount}
          onChange={(e) => setSelectedmount(e.target.value)}
        >
          <option value="">-- Select a Mount type --</option>
          {mountsData.map((row, index) => (
            <option key={index} value={row["MFG. PART"]}>
              {row["MFG. PART"]}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor='recpbox'>Receptacle Box</label>
        <select
          id="recepbox"
          value={selectedRecpBox}
          onChange={(e) => setSelectedRecpBox(e.target.value)}
        >
          <option value="">-- Select a Receptacle Box --</option>
          {recpBoxData.map((row, index) => (
            <option key={index} value={row["MFG. PART"]}>
              {row["MFG. PART"]}
            </option>
          ))}
        </select>
      </div>
      <div>

      </div>
      <canvas
        ref={canvasRef}
        width={1200}
        height={1200}
        style={{ width:"600px", height: "600px" , border: "1px solid black", marginTop: "20px" }}
      ></canvas>
    </div>
    //<canvas ref={canvasRef} width={500} height={500} style={{ border: "1px solid black" }}></canvas>
  )
}

export default InstallDrawing