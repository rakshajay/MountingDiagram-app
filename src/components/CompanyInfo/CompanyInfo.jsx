import React from 'react';
import signCastLogo from "../../assets/Logo/sign-cast1.png"

function CompanyInfo() {
    return (
        <div className="signage" id="border">
            <img src={signCastLogo}/>
            <p>
                361 Steelcase RD. W, #1,
            </p>
            <p>
            Markam, 
            </p>
            <p>
            Ontario
            </p>
            <p>
            Phone: (416) 900-2233
            </p>
            <p>
            email: design@signcast.ca
            </p>
        </div>
    )
}

export default CompanyInfo