import React, {useState} from "react";
export default function Faq(){
    const [openIndex, setOpenIndex]=useState(null);
    const faqData=[
    {question:"What exactly does your company do",
        answer:"We conduct an independent check of information on the presence or absence of a criminal record based on the data provided by the applicant. Based on the results, an official company report is prepared"
    },
    {question:"How does your check differ from a government certificate?",
        answer:"Express verification allows you to get results significantly faster, while Government certificates can take weeks to months, while our report is usually provided withing 48 hours"
    },
    {question: "Why does the verification takes only upto 48 hours?",
        answer:"We use verified information sources and established data search procedures This allows us to significantly reduce waiting time and provide results in the shortest time possible"
    },
    {question: "why might i need your verification for?",
        answer:"our services may be useful for employers, staffing agencies, private individuals, landlords , business partners, and organizations that require additional background checks",
    },
    {question:"what do you NOT do?",
        answer:"We do not issue government certificates"
    },
    {question:"How secure is my personal data?",
        answer:"All data is used exclusively for completing the check. Documents and consents are stored in our secured archive that is encrypted in qith 256-bit SSL"
},
    {question:"Do you provide discounts for regular clients?",
        answer:"Yes after completing a check u will be provided with a promo code for 40% discount on your next request. Enter it in the payment step of the form"
    },
    {question:"Can i order verification for multiple countries?",
        answer:"yes you can"
    },
    {question:"Pricing - Express Verification",
        answer:"Oceania(NZ,AU...) → 15 NZD PER COUNTRY, Asia → 36 NZD PER COUNTRY, Europe, Americas, Africa, Middle East → 46 NZD PER COUNTRY "
    },
    {question:"Countries temporaily unavailable",
        answer:"Texas, Japan, Scotland are temporarily unavailable;"
    },
    {question:"Full list of available countries 179 out of 195",
        answer:"Below is the full list of available countires America, albannia.." 
     }
];
    return(
        <div className="faq-container">
            <div className ="faq-header-section">
                <span className ="faq-gold-title">FAQ</span>
                <h1 className="faq-main-heading">Frequently Asked Questions</h1>
                <p className ="faq-sub-heading">Everyhting you  need to know about criminal record verification with TGSJ</p>
            </div>
        <div className ="faq-list">
            {faqData.map((faq,index)=> (
                <div className ="faq-item" key ={index}>
                    <div className ="faq-question"
                    onClick={()=> setOpenIndex(openIndex === index ? null : index)}>
                        <h3>{index+1}. {faq.question}</h3>
                        <span className="faq-icon">
                            {openIndex === index ? "-" : "+" }</span>
                            </div>
                    {openIndex === index && (
                        <p className ="faq-answer">{faq.answer}</p>
                    )}
                    </div>
            ))}
            </div></div>
    );    
}