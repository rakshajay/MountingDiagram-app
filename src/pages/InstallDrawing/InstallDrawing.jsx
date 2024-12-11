import React from "react";
import "./InstallDrawing.scss";
import { useState, useEffect, useRef } from "react";
import { drawCanvas } from "../../canvasUtils";
import Configuration from "../../components/Configuration/Configuration";
import * as XLSX from "xlsx";
import excelFile from "../../assets/Data/PDF Builder.xlsx";

function InstallDrawing() {
  const [screenData, setScreenData] = useState([]);
  const [selectedScreen, setSelectedScreen] = useState("55CT5WJ");
  const canvasRef = useRef(null);

  useEffect(() => {
    const fetchScreenData = async () => {
      const response = await fetch(excelFile);
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const screenSheetName = workbook.SheetNames[0];
      const screenSheet = workbook.Sheets[screenSheetName];
      const jsonData = XLSX.utils.sheet_to_json(screenSheet);
      setScreenData(jsonData);
    };
    fetchScreenData();
  }, []);

  useEffect(() => {
    drawCanvas(canvasRef, selectedScreen, screenData);
  }, [selectedScreen, screenData]);

  const handleScreenSelect = (screen, selectedData) => {
    setSelectedScreen(screen, selectedData);
  };

  return (
    <div>
      <div className="printpage">
        <div>
          <canvas
            className="printpage__drawings"
            id="canvas"
            ref={canvasRef}
            width={2400}
            height={1800}
         ></canvas>
        </div>
        <div className="printpage__specs">
          <Configuration onScreenSelect={handleScreenSelect} screenData={screenData} />
        </div>
      </div>
    </div>
  );
}

export default InstallDrawing;
