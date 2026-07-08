import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShield, faClock, faLock, faGlobe } from '@fortawesome/free-solid-svg-icons';
export default function Process (){
return(
       <div className = "tru-container">
            <div className = "tru-header-section">
            <span className="tru-gold-title">Why TGSJ</span>
            <h1 className="tru-main-heading">BUILT ON TRUST & EXPERTISE</h1>
            </div>
    <div className="tru-grid-container">
    <div className="tru-box">
        <div className="tru-logo">
            <FontAwesomeIcon icon={faShield} />
        </div>
        <div className="tru-content">
            <h1 className="tru-heading">Independent Third Party</h1>
            <p className="tru-sub-heading">No conflict of interest. Fully Independent verification for objective, court-admissible results.</p>
        </div>
    </div>

    <div className="tru-box">
        <div className="tru-logo">
            <FontAwesomeIcon icon={faClock} />
        </div>
        <div className="tru-content">
            <h1 className="tru-heading">48-Hour Turnaround</h1>
            <p className="tru-sub-heading">Express verification delivered within 48 hours. On-time delivery guaranteed.</p>
        </div>
    </div>

    <div className="tru-box">
        <div className="tru-logo">
            <FontAwesomeIcon icon={faLock} />
        </div>
        <div className="tru-content">
            <h1 className="tru-heading">Secure & Confidential</h1>
            <p className="tru-sub-heading">Data encrypted end-to-end, processed confidentially, retained for 3 years only.</p>
        </div>
    </div>

    <div className="tru-box">
        <div className="tru-logo">
            <FontAwesomeIcon icon={faGlobe} />
        </div>
        <div className="tru-content">
            <h1 className="tru-heading">179 Countries</h1>
            <p className="tru-sub-heading">The most comprehensive verification network available all major jurisdictions covered.</p>
        </div>
    </div>

</div>
        </div>
        );
        }