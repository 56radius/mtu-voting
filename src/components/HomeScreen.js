import React from "react";
import { useNavigate } from "react-router-dom";
import ".././assets/css/style.css";
import ".././assets/vendor/bootstrap/css/bootstrap.min.css";
import ".././assets/vendor/bootstrap-icons/bootstrap-icons.css";
import ".././assets/vendor/boxicons/css/boxicons.min.css";
import ".././assets/vendor/glightbox/css/glightbox.min.css";
import ".././assets/vendor/remixicon/remixicon.css";
import ".././assets/vendor/swiper/swiper-bundle.min.css";

function HomeScreen() {
  const navigate = useNavigate();
  const departments = [
    "Computer Science",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Biomedical Engineering",
    "Aerospace Engineering",
    "Environmental Science",
    "Physics",
    "Mathematics",
    "Chemistry",
    "Biology",
    "Psychology",
    "Sociology",
    "Economics",
    "Political Science",
    "History",
    "Philosophy",
    "Literature",
    "Linguistics"
  ];

  return (
    <div>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">Pick Your Department</h1>
        </div>
      </header>

      <section id="departments" className="d-flex align-items-center" style={{ marginTop: '100px' }}>
        <div className="container">
          <div className="row">
            {departments.map((department, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                <div
                  className="card shadow-sm border-0"
                  style={{ cursor: "pointer", backgroundColor: '#f8f9fa', borderRadius: '10px' }}
                  onClick={() => navigate(`/login/${department.replace(/\s+/g, '-').toLowerCase()}`)}
                >
                  <div className="card-body text-center">
                    <h5 className="card-title" style={{ color: '#007bff' }}>{department}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeScreen;
