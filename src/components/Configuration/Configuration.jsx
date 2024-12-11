import React from "react";
import "./Configuration.scss";
import { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import excelFile from "../../assets/Data/PDF Builder.xlsx";
import Description from "../Description/Description";
import NicheDim from "../NicheDim/NicheDim";
import ScreenDim from "../ScreenDim/ScreenDim";
import Notes from "../Notes/Notes";
import Swal from "sweetalert2";
import { validateSelection } from "../../onBlurUtils";


function Configuration({ onScreenSelect, screenData }) {
  // states to hold each data and use it on click
  const [selectedScreen, setSelectedScreen] = useState("55CT5WJ");
  const [mediaPlayerData, setMediaPlayerData] = useState([]);
  const [mountsData, setMountsData] = useState([]);
  const [recpBoxData, setRecpBoxData] = useState([]);
  const [selectedMediaP, setSelectedMediaP] = useState("");
  const [selectedMount, setSelectedmount] = useState("");
  const [selectedRecpBox, setSelectedRecpBox] = useState("");
  const [selected, setSelected] = useState("Horizontal");
  const [selectedType, setSelectedType] = useState("FlatWall");
  const [floorDis, setFloorDis] = useState("");
 
  // fecthing data from javscript and converting it to JSON
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(excelFile);
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
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

  const handleScreenChange = (event) => {
    const screen = event.target.value;
    setSelectedScreen(screen);
    const selectedData = screenData.find(
      (item) => item["Screen MFR"] === screen
    );
    onScreenSelect(screen, selectedData);
  };
  
  const handlePrint = () => {
    if (!selectedScreen || !selectedMediaP || !selectedMount || !selectedRecpBox || !floorDis) {
      Swal.fire({
        icon: "warning",
        title: "Missing Inputs",
        text: "Please fill out all required fields or select an option before proceeding.",
      });
      return;
    }
    window.print();
  };
  
  return (
    <div className="switches">
      <div className="switches__left">
       <div>
       <NicheDim screenData={screenData} selectedScreen={selectedScreen} />
       <Notes selectedRecpBox={selectedRecpBox} recpBoxData={recpBoxData} />
       </div>
       <div> 
       
       <ScreenDim screenData={screenData} selectedScreen={selectedScreen}/>
       </div>
      </div>
      <div className="switches__right" >
        {/* Drop downs */}
     <div  id="border">
       <h3>Configuration</h3>
      <div className="switches__right-drop">
        <label htmlFor="screenselect">Screen</label>
        <select
          id="screenselect"
          value={selectedScreen}
          onChange={handleScreenChange}
          onBlur={() => validateSelection(selectedScreen, "Please select a Screen before proceeding.")}
        >
          <option value="">Select a Screen</option>
          {screenData.map((row, index) => (
            <option key={index} value={row["Screen MFR"]}>
              {row["Screen MFR"]}
            </option>
          ))}
        </select>
      </div>
      <div className="switches__right-drop">
        <label htmlFor="mediaPlayer">Media Player</label>
        <select
          id="mediaPlayer"
          value={selectedMediaP}
          onChange={(e) => setSelectedMediaP(e.target.value)}
          onBlur={() => validateSelection(selectedMediaP, "Please select a Media Player before proceeding.")}
        >
          <option value="">-- Select a Media Player --</option>
          {mediaPlayerData.map((row, index) => (
            <option key={index} value={row["MFG. PART"]}>
              {row["MFG. PART"]}
            </option>
          ))}
        </select>
      </div>
      <div className="switches__right-drop">
        <label htmlFor="mount">Mount</label>
        <select
          id="mount"
          value={selectedMount}
          onChange={(e) => setSelectedmount(e.target.value)}
          onBlur={() => validateSelection(selectedMount, "Please select a Mount type before proceeding.")}
        >
          <option value="">-- Select a Mount type --</option>
          {mountsData.map((row, index) => (
            <option key={index} value={row["MFG. PART"]}>
              {row["MFG. PART"]}
            </option>
          ))}
        </select>
      </div>
      <div className="switches__right-drop">
        <label htmlFor="recpbox">Receptacle Box</label>
        <select
          id="recepbox"
          value={selectedRecpBox}
          onChange={(e) => setSelectedRecpBox(e.target.value)}
          onBlur={() => validateSelection(selectedRecpBox, "Please select a Receptacle Box before proceeding.")}
        >
          <option value="">-- Select a Receptacle Box --</option>
          {recpBoxData.map((row, index) => (
            <option key={index} value={row["MFG. PART"]}>
              {row["MFG. PART"]}
            </option>
          ))}
        </select>
      </div>
     </div>

      {/* Toggle section */}

      <div className="switches__toggle"  id="border">
        <div className="switches__container">
          <input
            type="radio"
            id="switchHorizontal"
            name="switchToggle"
            value="Horizontal"
            checked={selected === "Horizontal"}
            onChange={() => setSelected("Horizontal")}
            className="switches__input"
          />
          <input
            type="radio"
            id="switchVertical"
            name="switchToggle"
            value="Vertical"
            checked={selected === "Vertical"}
            onChange={() => setSelected("Vertical")}
            className="switches__input"
          />
          <label
            htmlFor="switchHorizontal"
            className={`switches__label ${selected === "Horizontal" ? "switches__label--active" : ""
              }`}
          >
            Horizontal
          </label>
          <label
            htmlFor="switchVertical"
            className={`switches__label ${selected === "Vertical" ? "switches__label--active" : ""
              }`}
          >
            Vertical
          </label>
          <div
            className={`switches__wrapper ${selected === "Vertical"
                ? "switches__wrapper--vertical"
                : "switches__wrapper--horizontal"
              }`}
          ></div>
        </div>

        <div className="switches__container">
          <input
            type="radio"
            id="switchNiche"
            name="switchType"
            value="Niche"
            checked={selectedType === "Niche"}
            onChange={() => setSelectedType("Niche")}
            className="switches__input"
          />
          <input
            type="radio"
            id="switchFlatWall"
            name="switchType"
            value="FlatWall"
            checked={selectedType === "FlatWall"}
            onChange={() => setSelectedType("FlatWall")}
            className="switches__input"
          />
          <label
            htmlFor="switchNiche"
            className={`switches__label ${selectedType === "Niche" ? "switches__label--active" : ""
              }`}
          >
            Niche
          </label>
          <label
            htmlFor="switchFlatWall"
            className={`switches__label ${selectedType === "FlatWall" ? "switches__label--active" : ""
              }`}
          >
            Flat Wall
          </label>
          <div
            className={`switches__wrapper ${selectedType === "FlatWall"
                ? "switches__wrapper--vertical"
                : "switches__wrapper--horizontal"
              }`}
          ></div>
        </div>
        <div className="floor-distance">
          <label htmlFor="flrDistance" className="floor-distance__label">
            Floor Distance
          </label>
          <input
            id="flrDistance"
            className="floor-distance__input"
            placeholder=""
            type="text"
            value={`${floorDis}`}
            onChange={(e) => setFloorDis(e.target.value)}
          />
        </div>
        <div className="floor-distance">
          <label htmlFor="flrDistance" className="floor-distance__label">
            Niche Depth Var
          </label>
          <input
            id="flrDistance"
            className="floor-distance__input"
            placeholder="0.5"
            type="text"
          />
        </div>
      </div>
          {/* Description Section */}
          <Description screenData={screenData} selectedScreen={selectedScreen} />
          <button onClick={handlePrint}>
        Print Page
      </button>

      </div>
       
    </div>
  );
}

export default Configuration;
