import React from 'react';
import { useState, useEffect, useRef } from 'react';
import * as XLSX from "xlsx";
import excelFile from "../../assets/Data/PDF Builder.xlsx";
import { drawCanvas } from "../../canvasUtils";

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
    drawCanvas(canvasRef, selectedScreen, screenData);
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
        width={2200}
        height={2200}
        style={{ width: "600px", height: "600px", border: "1px solid black", marginTop: "20px" }}
      ></canvas>
    </div>
    //<canvas ref={canvasRef} width={500} height={500} style={{ border: "1px solid black" }}></canvas>
  )
}

export default InstallDrawing