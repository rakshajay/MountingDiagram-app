import React from 'react';
import "./Notes.scss"
import "../Configuration/Configuration.scss";

function notes({ selectedRecpBox, recpBoxData }) {
    console.log(recpBoxData)
    const selectedData = recpBoxData.find(
        (row) => row["MFG. PART"] === selectedRecpBox
    );
    console.log(selectedData)

    if (selectedData) {
        const { Height, Width, Depth } = selectedData;

        return (
            <div id="border">
                <h3>
                    Notes
                </h3>
                <div>
                    <p>1. All dimensions are in inches.</p>
                    <p>2. Install recessed receptacle box with:</p>
                    <ul>
                        <li>2x Terminated Power Outlets</li>
                        <li>1x Terminated Data CAT5 Ethernet Outlet</li>
                    </ul>
                </div>

                <div className="floor-distance">
                    <label htmlFor="height" className="floor-distance__label">
                        Recptacle box height
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
                    Recptacle box width
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
                    Recptacle box Depth
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
    }
}

export default notes