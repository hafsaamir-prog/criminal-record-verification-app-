import React from 'react'
export default function Process(){
    return(
        <div className = "pro-container">
            <div className = "pro-header-section">
            <span className="pro-gold-title">THE PROCESS</span>
            <h1 className="pro-main-heading">FOUR SIMPLE STEPS</h1>
            <p className ="pro-sub-heading">From application to delivery straightforward at every stage.</p>
            </div>
        <div>
    
        <div className ="step-row">
            <div className ="step-num">1</div>
            <div className ="step-content">
            <h1 className="step-heading">Submit Your Data</h1>
            <p className ="step-sub-heading">Complete our Secure form with your personal details and residence history. Email verification included</p>
        </div>
        </div>
        <div className ="step-row">
            <div className ="step-num">2</div>
            <div className ="step-content">
            <h1 className="step-heading">Sign Consent Form</h1>
            <p className ="step-sub-heading">Electronically sign your Authorization Agreement. Your signed PDF is generated instantlly.</p>
        </div>
        </div>
        <div className ="step-row">
            <div className ="step-num">3</div>
            <div className ="step-content">
            <h1 className="step-heading">Secure Payment</h1>
            <p className ="step-sub-heading">Pay by card, Apply pay, Google pay. Your application enters the queue immediately.</p>
        </div>
        </div>
        <div className ="step-row">
            <div className ="step-num">4</div>
            <div className ="step-content">
            <h1 className="step-heading">Report Delivered</h1>
            <p className ="step-sub-heading">Your employer gets the report directly. You get a copy plus a 40% discount.</p>
        </div>
        </div>

        </div>
        </div>
    );
}