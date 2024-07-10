import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function LoginScreen() {
  const navigate = useNavigate();
  const [matricNumber, setMatricNumber] = useState("");
  const [votingNumber, setVotingNumber] = useState("");

  const handleLogin = () => {
    // Dummy validation logic
    const validMatricNumber = "123456"; // Replace with actual validation logic
    const validVotingNumber = "voting123"; // Replace with actual validation logic

    if (matricNumber === validMatricNumber && votingNumber === validVotingNumber) {
      // Show success alert
      Swal.fire({
        icon: "success",
        title: "Login successful!",
        text: "Welcome Back!",
      });

      // Navigate to dashboard
      navigate("/dashboard");
    } else {
      // Show error alert
      Swal.fire({
        icon: "error",
        title: "Login failed!",
        text: "Invalid matric number or voting number.",
      });
    }
  };

  return (
    <div>
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-4">
                    <button
                      style={{
                        borderWidth: 0,
                        background: "#fff",
                      }}
                      href="index.html"
                      className="logo d-flex align-items-center w-auto"
                    >
                   
                    </button>
                  </div>
                  <form action="" className="mt" method="post">
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="pt-4 pb-2">
                          <h5 className="card-title text-center pb-0 fs-4">
                            Your Department
                          </h5>
                        </div>

                        <form className="row g-3 needs-validation" noValidate>
                          <div className="col-12">
                            <label htmlFor="matricNumber" className="form-label">
                              Matric Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={matricNumber}
                              onChange={(e) => setMatricNumber(e.target.value)}
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter your matric number!
                            </div>
                          </div>

                          <div className="col-12">
                            <label htmlFor="votingNumber" className="form-label">
                              Voting Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={votingNumber}
                              onChange={(e) => setVotingNumber(e.target.value)}
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter your voting number!
                            </div>
                          </div>

                          <div className="col-12">
                            <button
                              onClick={handleLogin}
                              className="btn btn-primary w-100"
                              name="login"
                              type="button"
                            >
                              Login
                            </button>
                          </div>

                          <div className="col-12">
                            <p className="small mb-0">
                              Forgot Voting Number?{" "}
                              <a style={{ color: "green" }} onClick={() => navigate("/forgotvotingnumber")}>
                                Click Me
                              </a>
                            </p>
                          </div>

                          <div className="col-12">
                            <p className="small mb-0">
                              Don't have an account?{" "}
                              <a  style={{color: "blue"}} onClick={() => navigate("/register")}> Register Account  </a>
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
