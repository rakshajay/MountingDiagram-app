import React from 'react';
import "../Configuration/Configuration.scss";

function notes({ selectedRecpBox, recpBoxData, mountsData, selectedMount }) {
    const selectedData = recpBoxData.find(
        (row) => row["MFG. PART"] === selectedRecpBox
    );

    const selectedMountData = mountsData.find(
        (row) => row["MFG. PART"] === selectedMount
    );
    
    const { Height = "--Select rcep. box--", Width = "--Select rcep. box--", Depth = "--Select rcep. box--" } = selectedData ?? {};
    const { MaximumLoad = "N/A" } = selectedMountData ?? {};

        return (
            <div id="border">
                <h3>
                    Notes
                </h3>
                <div>
                    <p>1. All dimensions are in inches.</p>
                    <p>2. Selected mount can carry max. of {MaximumLoad}lbs</p>
                    <p>3. Install recessed receptacle box with:</p>
                    <ul>
                        <li>2x Terminated Power Outlets</li>
                        <li>1x Terminated Data CAT5 Ethernet Outlet</li>
                    </ul>
                </div>

                <div className="switches__floor-distance">
                    <label htmlFor="height" className="switches__floor-distance-label">
                        Recptacle box height
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
                    Recptacle box width
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
                    Recptacle box Depth
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
    }


export default notes