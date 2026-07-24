import React from "react";
import "./Payment.css";

export default function Payment({formData, setFormData, prevStep, submitForm}) {

  function handleChange(e) {
    const {name,value}= e.target;

    setFormData({
      ...formData,
      [name]:value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    submitForm();
  }

  return (
    <form className="payment-form" onSubmit={handleSubmit}>

      <h2 className="form-title">
        Payment
      </h2>

      <p className="form-subtitle">
        Complete your payment to submit your verification request.
      </p>

      <div className="payment-summary">

        <h3>Verification Summary</h3>

        <div className="summary-row">
          <span>Countries Selected</span>
          <span>{formData.countries.length}</span>
        </div>

        <div className="summary-row">
          <span>Verification Fee</span>
          <span>$150.00</span>
        </div>

      </div>

      <div className="form-group">

        <label>Cardholder Name *</label>

        <input
          type="text"
          name="cardName"
          value={formData.cardName}
          onChange={handleChange}
          placeholder="John Smith"
          required
        />

      </div>

      <div className="form-group">

        <label>Card Number *</label>

        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          placeholder="1234 5678 9012 3456"
          required
        />

      </div>

      <div className="card-row">

        <div className="form-group">

          <label>Expiry Date *</label>

          <input
            type="text"
            name="expiry"
            value={formData.expiry}
            onChange={handleChange}
            placeholder="MM/YY"
            required
          />

        </div>

        <div className="form-group">

          <label>CVV *</label>

          <input
            type="password"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            placeholder="123"
            required
          />

        </div>

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
          className="submit-btn"
        >
          Pay & Submit Verification
        </button>

      </div>

    </form>
  );
}