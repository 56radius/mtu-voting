import React, { useState } from "react";
import Sidebar from "../Elements/Sidebar";
import Headerbar from "../Elements/Headerbar";

function ResultScreen() {
  const [loading, setLoading] = useState(false);
  const [pollResults] = useState([
    { id: 1, title: "Sports Vote", participants: 150, deadline: "July 15, 2024", status: "Closed", created: "July 1, 2024" },
    { id: 2, title: "Departmental Awards", participants: 100, deadline: "July 18, 2024", status: "Open", created: "July 5, 2024" },
    { id: 3, title: "Executives Vote", participants: 200, deadline: "July 20, 2024", status: "Open", created: "July 10, 2024" },
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
            <div className="row mb-3">
              {/* Headers */}
              <div className="col-md-6"><h4>Poll</h4></div>
              <div className="col-md-2"><h4>Participants</h4></div>
              <div className="col-md-2"><h4>Deadline</h4></div>
              <div className="col-md-2"><h4>Status</h4></div>
            </div>
            {/* Poll Results */}
            {pollResults.map((poll) => (
              <div className="col-12 mb-3" key={poll.id}>
                <div className="card shadow-sm h-100" style={{ height: "150px" }}>
                  <div className="card-body" onClick={() => console.log(`Clicked on ${poll.title}`)} style={{ cursor: "pointer" }}>
                    <div className="row">
                      <div className="col-md-6">
                        <h5 className="card-title">{poll.title}</h5>
                        <p className="card-text">Created on: {poll.created}</p>
                      </div>
                      <div className="col-md-2">{poll.participants}</div>
                      <div className="col-md-2">{poll.deadline}</div>
                      <div className="col-md-2">{poll.status}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
