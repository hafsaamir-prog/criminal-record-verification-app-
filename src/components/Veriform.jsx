import React, {useState} from "react";
import './VerificationForm.css';
export default function VeriForm({onClose}){
    const[step,setStep]=useState(1);

    const[formData, setFormData] =useState({
        fatherName:" ",
        motherName:" ",
        motherMaidenName:" ",
        email:" ",
        phone:" ",
        homeAddress:" ",
        employerEmail:" ",

        countries:[{

        }]
        
    })

}

}