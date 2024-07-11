import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Elements/Sidebar";
import Headerbar from "../Elements/Headerbar";

function AvailablePollScreen() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [activePolls] = useState([
    { id: 1, title: "Sports Vote", description: "Vote for the next sports event.", timestamp: "July 15, 2024" },
    { id: 2, title: "Departmental Awards", description: "Nominate colleagues for outstanding performance.", timestamp: "July 18, 2024" },
    { id: 3, title: "Executives Vote", description: "Vote for the next executive committee member.", timestamp: "July 20, 2024" },
    // Add more active polls as needed
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedPoll, setSelectedPoll] = useState(null);

  const openModal = (poll) => {
    setSelectedPoll(poll);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPoll(null);
  };

  return (
    <div style={{ background: "#f6f9ff" }}>
      <Headerbar />
      <Sidebar />

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>
            <span style={{ color: "green" }}>Available Polls</span>
          </h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Available Polls</li>
            </ol>
          </nav>
        </div>

        {/* Active Polls Section */}
        <section className="section available-polls">
          <div className="container">
            <div className="row">
              {activePolls.map((poll) => (
                <div className="col-md-6 col-lg-4 mb-4" key={poll.id}>
                  <div className="card shadow-sm h-100">
                    <div className="card-body">
                      <h5 className="card-title">{poll.title}</h5>
                      <p className="card-text">{poll.description}</p>
                      <p className="card-text"><small className="text-muted">Ends on {poll.timestamp}</small></p>
                      <button style={{ background: "purple" }} className="btn btn-primary" onClick={() => openModal(poll)}>Vote Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
        {showModal && (
          <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Vote for {selectedPoll.title}</h5>
                  <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                  {/* Content of the modal goes here */}
                  <p>Categories and candidates for {selectedPoll.title} will be shown here.</p>
                  <p>Example: Category 1 - Candidate A</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                  {/* Additional buttons for voting actions */}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dimmed Background Overlay */}
        {showModal && <div className="modal-backdrop fade show"></div>}

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

export default AvailablePollScreen;
