import React,{useState} from "react";
import "./VerificationForm.css";
import PersonalInfo from "./PersonalInfo";
import ResidenceHistory from "./ResidenceHistory";
import ConsentAuthorization from "./Consent";
import Payment from "./Payment";

export default function VerificationForm({onClose}) {

    const [step,setStep]=useState(1);

    const [formData,setFormData]=useState({

        fatherName: "",
        motherName: "",
        motherMaidenName: "",
        email: "",
        phone: "",
        homeAddress: "",
        employerEmail: "",

        countries: [
            {
                country: "",
                fromYear: "",
                toYear: "",
                taxNumber: "",
                driversLicense: "",
                nationalId: "",
                otherDocuments: ""
            }
        ],

    
        signature: "",
        agree: false,

    
        cardName: "",
        cardNumber: "",
        expiry: "",
        cvv: ""
    });

    function nextStep() {
        setStep(step+1);
    }

    function prevStep() {
        setStep(step-1);
    }

    function submitForm() {

        console.log(formData);

        alert("Verification Request Submitted!");

        onClose();

    }

    return (

        <div className="verification-overlay">

            <div className="verification-modal">

                <div className="verification-header">
                    <div>
                        <h2 className="logo">
                            TGSJ
                        </h2>
                        <p className="logo-subtitle">
                            THEMIS GLOBAL SCAN JUSTICE
                        </p>
                    </div>
                    <button
                        className="close-btn"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>

                <div className="progress-bar">
                    <div className={`progress-step ${step >= 1 ? "active" : ""}`}>
                        1
                    </div>

                    <div className="progress-line"></div>

                    <div className={`progress-step ${step >= 2 ? "active" : ""}`}>
                        2
                    </div>

                    <div className="progress-line"></div>

                    <div className={`progress-step ${step >= 3 ? "active" : ""}`}>
                        3
                    </div>

                    <div className="progress-line"></div>

                    <div className={`progress-step ${step >= 4 ? "active" : ""}`}>
                        4
                    </div>

                </div>

                {step === 1 && (

                    <PersonalInfo
                        formData={formData}
                        setFormData={setFormData}
                        nextStep={nextStep}
                    />

                )}
                {step === 2 && (

                    <ResidenceHistory
                        formData={formData}
                        setFormData={setFormData}
                        nextStep={nextStep}
                        prevStep={prevStep}
                    />

                )}

                {step === 3 && (

                    <ConsentAuthorization
                        formData={formData}
                        setFormData={setFormData}
                        nextStep={nextStep}
                        prevStep={prevStep}
                    />

                )}
                {step === 4 && (

                    <Payment
                        formData={formData}
                        setFormData={setFormData}
                        prevStep={prevStep}
                        submitForm={submitForm}
                    />

                )}

            </div>

        </div>

    );

}