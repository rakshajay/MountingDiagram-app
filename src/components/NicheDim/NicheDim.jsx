import React from 'react';
import "./NicheDim.scss"
import "../Configuration/Configuration.scss";

function NicheDim({screenData, selectedScreen}) {

    const selectedData = screenData.find(
        (row) => row["Screen MFR"] === selectedScreen
    );

    if (selectedData) {
        const { Height, Width, Depth } = selectedData;
        
  return (
    <div id="border">
        <h3>
            Niche Dimentions
        </h3>
        <div className="floor-distance">
          <label htmlFor="height" className="floor-distance__label">
            Height
          </label>
          <input
            id="height"
            className="floor-distance__input"
           value={`${Height+2.5}"`}
           readOnly
          />
        </div>
        <div className="floor-distance">
          <label htmlFor="Width" className="floor-distance__label">
           Width
          </label>
          <input
            id="width"
            className="floor-distance__input"
            value={`${Width+2.5}"`}
           readOnly
          />
        </div>
        <div className="floor-distance">
          <label htmlFor="depth" className="floor-distance__label">
          Depth
          </label>
          <input
            id="depth"
            className="floor-distance__input"
            value={`${Depth+2.16}"`}
           readOnly
          />
        </div>
    </div>
  )
}}

export default NicheDim