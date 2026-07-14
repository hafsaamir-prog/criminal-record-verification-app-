import React from "react";
import "./PersonalInfo.css";

export default function PersonalInfo({
    formData,
    setFormData,
    nextStep}){
        function handleChange(e){
            const{name,value}=e.target;

            setFormData({
                ...formData,
                [name]:value
            });
        }
        function handleSendCode(field){
            if (formData[field]===""){
                alert(`Please enter your ${field} first .`);
                return;
            }
            alert (`Verification code sent to ${formData[field]}`);
        }
        function handleSubmit(e){
            e.preventDefault();
            nextStep();
        }
    return(
        <form className="personal-info-form" onSubmit ={handleSubmit}>
            <h2 className ="form-title">Personal Information </h2>
            <p className ="form-subtitle"> 
                Please complete before begining the verification process.
            </p> 

            <div className ="form-group">
                <label> Father's Full Name *</label>
                <input 
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    placeholder="Robert Smith"                
                    required/>
            </div>

            <div className="form-group">
                <label>Mother's Full Name *</label>
                <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                placeholder="Elizabeth Smith"
                required />
            </div>

            <div className ="form-group">
                <label>Mother's Maiden Name *</label>
                <input 
                type="text"
                name="motherMaidenName"
                value={formData.motherMaidenName}
                onChange={handleChange}
                placeholder="Johnson"
                required/>
            </div>

            <div className ="form-group">
                <label>E-mail Address *</label>
                <div className ="verification-row">
                    <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required/>
                    <button
                    type="button"
                    className="send-code-btn"
                    onClick={()=> handleSendCode("email")}>
                        Send Code 
                    </button> 
                </div>
            </div>      

            <div classNaame ="form-group">
                <label>Phone Number *</label>
                <div className ="verification-row">
                    <input 
                        type="tel"
                        name="phone"
                        value={formDta.phone}
                        onChange={handleChange}
                        placeholder="+ 92 313422680"
                        required/>
                    <button 
                        type="button"
                        className="send-code-btn"
                        onClick={()=>handleSendCode("phone")}>
                            Send Code
                    </button>
                </div>
            </div>

            <div className="form-group">
                <label>Home Adress *</label>
                <textarea 
                    rows ="4"
                    name= "homeAddres"
                    value={formData.homeAddress}
                    onChange={handleChange}
                    placeholder="Enter your complete Home Address"
                    required/>
            </div>

            <div className="form-group">
                <label>Employer Email</label>
                <input
                    type="email"
                    name="employerEmail"
                    value={formData.employerEmail}
                    onChange={handleChange}
                    placeholder="hr@company.com"/>
            </div>
            <button
                type="submit"
                className="contibue-btn">
                    Continue to Residence History → 
                    </button>
        </form>

    );
}
