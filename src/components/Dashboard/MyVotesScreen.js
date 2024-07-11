import React, { useState } from "react";
import Sidebar from "../Elements/Sidebar";
import Headerbar from "../Elements/Headerbar";

function MyVotesScreen() {
  const [loading, setLoading] = useState(false);
  const [myVotes] = useState([
    { id: 1, title: "Sports Vote", choice: "Option 1", timestamp: "July 15, 2024" },
    { id: 2, title: "Departmental Awards", choice: "Option 2", timestamp: "July 18, 2024" },
    { id: 3, title: "Executives Vote", choice: "Option 1", timestamp: "July 20, 2024" },
    // Add more votes as needed
  ]);

  return (
    <div style={{ background: "#f6f9ff" }}>
      <Headerbar />
      <Sidebar />

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>
            <span style={{ color: "green" }}>My Votes</span>
          </h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">My Votes</li>
            </ol>
          </nav>
        </div>

        {/* My Votes Section */}
        <section className="section my-votes">
          <h2>My Votes</h2>
          <div className="row">
            {myVotes.map((vote) => (
              <div className="col-lg-4 col-md-6 mb-4" key={vote.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{vote.title}</h5>
                    <p className="card-text">My Choice: {vote.choice}</p>
                    <p className="card-text">Voted On: {vote.timestamp}</p>
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

export default MyVotesScreen;
