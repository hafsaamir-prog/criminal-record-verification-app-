import React from "react";
import "./ConsentAuthorization.css";

export default function ConsentAuthorization({formData,setFormData,nextStep,prevStep}) {

  function handleChange(e) {
    const {name,value,type,checked} = e.target;

    setFormData({
      ...formData,
      [name]:type==="checkbox"?checked : value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.agree) {
      alert("Please accept the authorization agreement before continuing.");
      return;
    }

    nextStep();
  }

  return (

    <form className="consent-form" onSubmit={handleSubmit}>

      <h2 className="form-title">
        Consent & Authorization
      </h2>

      <p className="form-subtitle">
        Please review the authorization agreement carefully before continuing.
      </p>

      <div className="agreement-box">

        <h3>Authorization Agreement</h3>

        <p>
          I authorize THEMIS GLOBAL SCAN JUSTICE (TGSJ) to obtain,
          verify and process my criminal record information from
          the countries listed in this application.
        </p>

        <p>
          I understand that this information will only be used for
          employment, immigration, educational or other legitimate
          verification purposes requested by me or my employer.
        </p>

        <p>
          I confirm that all information provided in this application
          is accurate and complete to the best of my knowledge.
        </p>
        <p>
          I understand that providing false or misleading information
          may delay or invalidate the verification process.
        </p>

      </div>

      <div className="form-group">

        <label>Electronic Signature *</label>

        <input
          type="text"
          name="signature"
          value={formData.signature}
          onChange={handleChange}
          placeholder="Type your full legal name"
          required
        />

      </div>

      <div className="checkbox-group">

        <input
          type="checkbox"
          id="agree"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
        />

        <label htmlFor="agree">
          I have read and agree to the authorization statement above.
        </label>

      </div>

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
          Continue to Payment →
        </button>

      </div>

    </form>

  );
}

