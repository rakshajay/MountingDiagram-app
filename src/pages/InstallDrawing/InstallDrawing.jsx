import React from "react";
import "./InstallDrawing.scss";
import { useState, useEffect, useRef } from "react";
import { drawCanvas } from "../../canvasUtils";
import Configuration from "../../components/Configuration/Configuration";
import * as XLSX from "xlsx";
import excelFile from "../../assets/Data/PDF Builder.xlsx";

function InstallDrawing() {
  // const [screenData, setScreenData] = useState([]);
  // const [selectedScreen, setSelectedScreen] = useState("55CT5WJ");
  // const [floorDis, setFloorDis] = useState("");
  // const [selected, setSelected] = useState("Horizontal");
  // // const canvasRef = useRef(null);

  // useEffect(() => {
  //   const fetchScreenData = async () => {
  //     const response = await fetch(excelFile);
  //     const arrayBuffer = await response.arrayBuffer();
  //     const workbook = XLSX.read(arrayBuffer, { type: "array" });
  //     const screenSheetName = workbook.SheetNames[0];
  //     const screenSheet = workbook.Sheets[screenSheetName];
  //     const jsonData = XLSX.utils.sheet_to_json(screenSheet);
  //     setScreenData(jsonData);
  //   };
  //   fetchScreenData();
  // }, []);

  // useEffect(() => {
  //   drawCanvas(canvasRef, selectedScreen, screenData, floorDis);
  // }, [selectedScreen, screenData, floorDis]);

  // const handleScreenSelect = (screen, selectedData, floorDis) => {
  //   setSelectedScreen(screen, selectedData, floorDis);
  //   setFloorDis(floorDis)
  //   setSelected(selected)
  // };
  
  return (
    <div>
      <div >
        {/* <div>
          <canvas
            className="printpage__drawings"
            id="canvas"
            ref={canvasRef}
            width={2400}
            height={2200}
         ></canvas>
        </div> */}
        <div className="printpage__specs">
          <Configuration />
        </div>
      </div>
    </div>
  );
}

export default InstallDrawing;
