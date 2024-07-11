import React, { useState } from "react";
import Sidebar from "../Elements/Sidebar";
import Headerbar from "../Elements/Headerbar";

function ResultScreen() {
  const [loading, setLoading] = useState(false);
  const [pollResults] = useState([
    { id: 1, title: "Sports Vote", participants: 150, deadline: "July 15, 2024", status: "Closed" },
    { id: 2, title: "Departmental Awards", participants: 100, deadline: "July 18, 2024", status: "Open" },
    { id: 3, title: "Executives Vote", participants: 200, deadline: "July 20, 2024", status: "Open" },
    // Add more polls as needed
  ]);

  return (
    <div style={{ background: "#f6f9ff" }}>
      <Headerbar />
      <Sidebar />

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>
            <span style={{ color: "green" }}>Result Screen</span>
          </h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Results</li>
            </ol>
          </nav>
        </div>

        <section className="section">
          <div className="container">
            <div className="row">
              {/* Left Column: Polls */}
              <div className="col-lg-6">
                <h2>Polls</h2>
                {pollResults.map((poll) => (
                  <div className="card mb-4" key={poll.id}>
                    <div className="card-body">
                      <h5 className="card-title">{poll.title}</h5>
                      {/* Display other poll details as needed */}
                    </div>
                  </div>
                ))}
              </div>
              {/* Right Column: Poll Details */}
              <div className="col-lg-6">
                <h2>Poll Details</h2>
                {pollResults.map((poll) => (
                  <div className="card mb-4" key={poll.id}>
                    <div className="card-body">
                      <h5 className="card-title">{poll.title}</h5>
                      <p className="card-text">Participants: {poll.participants}</p>
                      <p className="card-text">Deadline: {poll.deadline}</p>
                      <p className="card-text">Status: {poll.status}</p>
                      {/* Display other poll details as needed */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Loading Spinner */}
      {loading && (
        <div className="loading-overlay">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResultScreen;
