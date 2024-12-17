import React from 'react';
import "../Configuration/Configuration.scss";

function ScreenDim({screenData, selectedScreen}) {

    const selectedData = screenData.find(
        (row) => row["Screen MFR"] === selectedScreen
    );

    if (selectedData) {
        const { Height, Width, Depth } = selectedData;
        
  return (
    <div id="border">
        <h3>
            Screen Dimentions
        </h3>
        <div className="switches__floor-distance">
          <label htmlFor="height" className="switches__floor-distance-label">
            Height
          </label>
          <input
            id="height"
            className="switches__floor-distance-input"
           value={`${Height}"`}
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
            value={`${Width}"`}
           readOnly
          />
        </div>
        <div className="switches__floor-distance">
          <label htmlFor="depth" className="switches__floor-distance-label">
          Size
          </label>
          <input
            id="depth"
            className="switches__floor-distance-input"
            value={`${Depth}"`}
           readOnly
          />
        </div>
    </div>
  )
}}

export default ScreenDim