import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Elements/Sidebar";
import Headerbar from "../Elements/Headerbar";

function DashboardScreen() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [activePolls] = useState([
    { id: 1, title: "Sports Vote", description: "Vote for the next sports event.", timestamp: "July 15, 2024" },
    { id: 2, title: "Departmental Awards", description: "Nominate colleagues for outstanding performance.", timestamp: "July 18, 2024" },
    { id: 3, title: "Executives Vote", description: "Vote for the next executive committee member.", timestamp: "July 20, 2024" },
    // Add more active polls as needed
  ]);
  const [recentVotes] = useState([
    { id: 1, user: "John Doe", choice: "Option 1", timestamp: "July 14, 2024" },
    { id: 2, user: "Jane Smith", choice: "Option 2", timestamp: "July 13, 2024" },
    { id: 3, user: "John Doe", choice: "Best Lecturer Poll", timestamp: "July 12, 2024" },
    { id: 4, user: "Jane Smith", choice: "Course Rep Poll", timestamp: "July 11, 2024" },
    // Add more recent votes as needed
  ]);

  return (
    <div style={{ background: "#f6f9ff" }}>
      <Headerbar />
      <Sidebar />

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>
            <span style={{ color: "green" }}>User's</span> Dashboard
          </h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>

        {/* Active Polls Section */}
        <section className="section dashboard">
          <h2>Active Polls</h2>
          <div className="row">
            {activePolls.map((poll) => (
              <div className="col-lg-4 col-md-6 mb-4" key={poll.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{poll.title}</h5>
                    <p className="card-text">{poll.description}</p>
                    <p className="card-text"><small className="text-muted">Ends on {poll.timestamp}</small></p>
                    {/* Add voting button or link here */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Polls Section */}
        <section className="section dashboard">
          <h2>Recent Polls</h2>
          <div className="row">
            {recentVotes.map((vote) => (
              <div className="col-lg-4 col-md-6 mb-4" key={vote.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{vote.user}</h5>
                    <p className="card-text">Voted for {vote.choice}</p>
                    <p className="card-text"><small className="text-muted">{vote.timestamp}</small></p>
                    {/* Display other vote details */}
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

export default DashboardScreen;
