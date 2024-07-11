import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../Elements/Sidebar";
import Headerbar from "../Elements/Headerbar";

const pollData = {
  1: {
    title: "Sports Vote",
    candidates: [
      { name: "Candidate 1", votes: 100, imageUrl: "boyfirst.jpeg" },
      { name: "Candidate 2", votes: 50, imageUrl: "candidate2.jpg" },
    ],
  },
  2: {
    title: "Departmental Awards",
    candidates: [
      { name: "Candidate 1", votes: 60, imageUrl: "candidate1.jpg" },
      { name: "Candidate 2", votes: 40, imageUrl: "candidate2.jpg" },
    ],
  },
  3: {
    title: "Executives Vote",
    candidates: [
      { name: "Candidate 1", votes: 120, imageUrl: "candidate1.jpg" },
      { name: "Candidate 2", votes: 80, imageUrl: "candidate2.jpg" },
    ],
  },
};

function PollResultScreen() {
  const { pollId } = useParams();
  const [loading, setLoading] = useState(false);
  const [poll, setPoll] = useState(null);

  useEffect(() => {
    setLoading(true);
    // Simulate an API call to fetch poll data
    setTimeout(() => {
      setPoll(pollData[pollId]);
      setLoading(false);
    }, 1000);
  }, [pollId]);

  if (loading) {
    return (
      <div className="loading-overlay">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!poll) {
    return <div>Poll not found</div>;
  }

  const totalVotes = poll.candidates.reduce((sum, candidate) => sum + candidate.votes, 0);

  return (
    <div style={{ background: "#f6f9ff" }}>
      <Headerbar />
      <Sidebar />

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>
            <span style={{ color: "green" }}>{poll.title}</span>
          </h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">{poll.title}</li>
            </ol>
          </nav>
        </div>

        <section className="section poll-result">
          <div className="container">
            <div className="row">
              {poll.candidates.map((candidate, index) => (
                <div className="col-md-6 mb-4" key={index}>
                  <div className="card shadow-sm">
                    <div className="card-body text-center">
                      <img src={candidate.imageUrl} alt={candidate.name} className="img-fluid rounded mb-3" />
                      <h5 className="card-title">{candidate.name}</h5>
                      <div className="progress mb-2">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${(candidate.votes / totalVotes) * 100}%` }}
                          aria-valuenow={(candidate.votes / totalVotes) * 100}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          {(candidate.votes / totalVotes) * 100}%
                        </div>
                      </div>
                      <p>Total Votes: {candidate.votes}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PollResultScreen;
