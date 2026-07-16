import React from "react";
import "./ResidenceHistory.css";

export default function ResidenceHistory({
    formData,
    setFormDta,
    nextStep,
    prevStep}){
    }
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
                        driverseLicense:"",
                        nationalId:"",
                        otherDocuments:" "
                    }]
                    function handleChange(e){
                        handleChange(e){
                            
                        }

                        }
                    }

                    }
                    }
                ]

            })
        }
    }
)}