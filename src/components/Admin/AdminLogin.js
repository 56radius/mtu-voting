import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');

  const handleLogin = () => {
    // Dummy validation logic
    const validEmail = 'admin@example.com'; // Replace with actual validation logic
    const validDepartment = 'IT'; // Replace with actual validation logic

    if (email === validEmail && department === validDepartment) {
      // Show success alert
      Swal.fire({
        icon: 'success',
        title: 'Login successful!',
        text: 'Welcome Back!',
      });

      // Navigate to admin dashboard
      navigate('/admin/dashboard');
    } else {
      // Show error alert
      Swal.fire({
        icon: 'error',
        title: 'Login failed!',
        text: 'Invalid email or department.',
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
                        background: '#fff',
                      }}
                      href="index.html"
                      className="logo d-flex align-items-center w-auto"
                    >
                      {/* Logo */}
                    </button>
                  </div>
                  <form action="" className="mt" method="post">
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="pt-4 pb-2">
                          <h5 className="card-title text-center pb-0 fs-4">
                            Admin Login
                          </h5>
                        </div>

                        <form className="row g-3 needs-validation" noValidate>
                          <div className="col-12">
                            <label htmlFor="email" className="form-label">
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter your email!
                            </div>
                          </div>

                          <div className="col-12">
                            <label htmlFor="department" className="form-label">
                              Department
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={department}
                              onChange={(e) => setDepartment(e.target.value)}
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter your department!
                            </div>
                          </div>

                          <div className="col-12">
                            <button
                              onClick={handleLogin}
                              style={{background: "purple"}}
                              className="btn btn-primary w-100"
                              name="login"
                              type="button"
                            >
                              Login
                            </button>
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

export default AdminLogin;
