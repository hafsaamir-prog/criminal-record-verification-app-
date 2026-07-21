import React from "react";
import "./ResidenceHistory.css";

export default function ResidenceHistory({
    formData,
    setFormDta,
    nextStep,
    prevStep
}){
    function handleCountryChange(index,e){
        const{name,value}=e.target;

            const updatedCountries=[...formData.countries];
            updatedCountries[index][name]=value;

            setFormData({
                ...formData,
                countries:updatedCountries
            });
        }
        function addCountry(){
            setFormData({
                ...formData,
                countries:[
                    ...formData.countries,
                    {
                        country:" ",
                        fromYear:" ",
                        toYear:" ",
                        taxNumber:"",
                        driversLicense:"",
                        nationalId:"",
                        otherDocuments:""
                    }
                ]
            });
        }
        function handleSubmit(e){
            e.preventDefault();
            nextStep;
        }        
        return(
            <form className="residence-form" onSubmit={handleSubmit}>
                <h2 className ="form-title">Residence History</h2>
                <p className = "form-subtitle">
                    Please provide the countries where you have lived.
                </p>
                {formData.countries.map((country,index)=>(
                    <div className ="country-card" key ={index}>
                        <h3>Country{index+1}</h3>
                        <div className ="form-group">
                            <label> Country *</label> 
                                <input
                                    type="text"
                                    name="country"
                                    value="country "
                                    onChange={(e) => handleCountryChange(index, e)}
                                    placeholder="Pakistan"
                                    required
                                />
                        </div>

                    <div className="year-row">

                        <div className="form-group">
                            <label>From Year *</label>

                                <input
                                    type="number"
                                    name="fromYear"
                                    value={country.fromYear}
                                    onChange={(e) => handleCountryChange(index, e)}
                                    placeholder="2020"
                                    required
                                />
                        </div>

                    <div className="form-group">
                        <label>To Year *</label>

                        <input
                            type="number"
                            name="toYear"
                            value={country.toYear}
                            onChange={(e) => handleCountryChange(index, e)}
                            placeholder="2024"
                            required
                        />
                    </div>

                    </div>

                    <div className="form-group">
                        <label>Tax Number</label>

                            <input
                                type="text"
                                name="taxNumber"
                                value={country.taxNumber}
                                onChange={(e) => handleCountryChange(index, e)}
                            />
                    </div>

                    <div className="form-group">
                        <label>Driver's License</label>

                            <input
                                type="text"
                                name="driversLicense"
                                value={country.driversLicense}
                                onChange={(e) => handleCountryChange(index, e)}
                            />
                    </div>

                    <div className="form-group">
                        <label>National ID</label>

                            <input
                                type="text"
                                name="nationalId"
                                value={country.nationalId}
                                onChange={(e) => handleCountryChange(index, e)}
                            />
                    </div>

                    <div className="form-group">
                        <label>Other Documents</label>

                        <input
                        type="text"
                        name="otherDocuments"
                        value={country.otherDocuments}
                        onChange={(e) => handleCountryChange(index, e)}
                        />
                    </div>

                    </div>

                ))}

                <button
                    type="button"
                    className="add-country-btn"
                    onClick={addCountry}
                >
                    + Add Another Country
                </button>

                <div className="navigation-buttons">

                    <button
                    type="button"
                    className="back-btn"
                    onClick={prevStep}
                    >
                    ← Back
                    </button>

                    <button
                    type="submit"
                    className="continue-btn"
                    >
                    Continue →
                    </button>

                </div>

                </form>
            );
            }