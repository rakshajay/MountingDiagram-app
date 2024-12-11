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
        <div className="floor-distance">
          <label htmlFor="height" className="floor-distance__label">
            Height
          </label>
          <input
            id="height"
            className="floor-distance__input"
           value={`${Height}"`}
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
            value={`${Width}"`}
           readOnly
          />
        </div>
        <div className="floor-distance">
          <label htmlFor="depth" className="floor-distance__label">
          Size
          </label>
          <input
            id="depth"
            className="floor-distance__input"
            value={`${Depth}"`}
           readOnly
          />
        </div>
    </div>
  )
}}

export default ScreenDim