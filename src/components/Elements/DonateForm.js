import React, { useState } from "react";

const DonationForm = () => {
  const [donationAmount, setDonationAmount] = useState("");

  const handleDonationChange = (e) => {
    setDonationAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send donation amount to server)
    console.log("Donation amount:", donationAmount);
    // Reset donation amount after submission
    setDonationAmount("");
  };

  return (
    <div>
      <h2>Donate Now</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="donationAmount">Donation Amount ($)</label>
          <input
            type="number"
            className="form-control"
            id="donationAmount"
            value={donationAmount}
            onChange={handleDonationChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Donate
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
