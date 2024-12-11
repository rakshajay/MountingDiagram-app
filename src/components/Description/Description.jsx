import React from 'react';

function Description({ screenData, selectedScreen }) {

    const selectedData = screenData.find(
        (row) => row["Screen MFR"] === selectedScreen
    );

    if (selectedData) {
        const { Make, Screen } = selectedData;

        return (
            <div className='discription' id="border"> 
                <h3>Description</h3>
                <div className='discription-content'>
                    <label htmlFor='title'>Title</label>
                    <input id='title'>
                    </input>
                </div>
                <div className='discription-content'>
                    <label htmlFor='drawer'>Drawer</label>
                    <input id='drawer'>
                    </input>
                </div>
                <div className='discription-content'>
                    <label htmlFor='department'>Department</label>
                    <input id='department'>
                    </input>
                </div>
                <div className='discription-content'>
                    <label htmlFor='Screen size'>Screen Size</label>
                    <input
                        id="screen-size"
                        value={`${Make} ${Screen}" Display`}
                        readOnly
                    />
                </div>
                <div className='discription-content'>
                    <label htmlFor='revision'>Revision</label>
                    <input
                        id="revision"
                    />
                </div>
                <div className='discription-content'>
                    <label htmlFor='date'>Date</label>
                    <input
                        type="date"
                        id="date"
                    />
                </div>
            </div>
        )
    }
}

export default Description