import React from 'react';
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
        <div className="switches__floor-distance">
          <label htmlFor="height" className="switches__floor-distance-label">
            Height
          </label>
          <input
            id="height"
            className="switches__floor-distance-input"
           value={`${Height+2.5}"`}
           readOnly
          />
        </div>
        <div className="switches__floor-distance">
          <label htmlFor="Width" className="switches__floor-distance-label">
           Width
          </label>
          <input
            id="width"
            className="switches__floor-distance-input"
            value={`${Width+2.5}"`}
           readOnly
          />
        </div>
        <div className="switches__floor-distance">
          <label htmlFor="depth" className="switches__floor-distance-label">
          Depth
          </label>
          <input
            id="depth"
            className="switches__floor-distance-input"
            value={`${Depth+2.16}"`}
           readOnly
          />
        </div>
    </div>
  )
}}

export default NicheDim