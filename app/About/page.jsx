import React from 'react';

export default function About() {
  return (
    <main>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <main className="container-fluid">
          <a className="navbar-brand" href="">
            <img src="/bisnis.png" alt="" width="150" height="50" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link ms-3" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link ms-3" href="./Features">
                Features
              </a>
              <a className="nav-link ms-3" href="./Pricing">
                Pricing
              </a>
              <a className="nav-link active ms-3" href="./About">
                About
              </a>
            </div>
          </div>
        </main>

        <div className=" justify-content-md-end">
          <button className="btn btn-light me-md-3" type="button">
            LOGIN
          </button>
        </div>
      </nav>
      <form className="container p-5 col-md-6">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>

        <div class="form-floating">
          <textarea class="form-control mb-3" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 200, width: 670 }}></textarea>
          <label for="floatingTextarea2">Comments</label>
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: 670 }}>
          Submit
        </button>
        <div className="container p-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.435905013204!2d106.81350967475038!3d-6.206090193781716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f9aec56d3d51%3A0x7bd119dd8df9c3a4!2sWisma%20Bisnis%20Indonesia!5e0!3m2!1sen!2sus!4v1708586356223!5m2!1sen!2sus"
            style={{ width: 500, height: 300 }}
          ></iframe>
        </div>
      </form>
    </main>
  );
}
