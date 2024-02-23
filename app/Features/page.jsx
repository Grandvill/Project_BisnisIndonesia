import React from 'react';

export default function page() {
  return (
    <main>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
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
              <a className="nav-link active ms-3" href="./Features">
                Features
              </a>
              <a className="nav-link ms-3" href="./Pricing">
                Pricing
              </a>
              <a className="nav-link ms-3" href="./About">
                About
              </a>
            </div>
          </div>
        </div>

        <div className=" justify-content-md-end">
          <button className="btn btn-light me-md-3" type="button">
            LOGIN
          </button>
        </div>
      </nav>

      <div className="container p-5">
        <h1 class="display-1">Display 1</h1>
        <h1 class="display-2">Display 2</h1>
        <h1 class="display-3">Display 3</h1>
        <h1 class="display-4">Display 4</h1>
        <p class="text-center p-5">Center aligned text on all viewport sizes.</p>
        <p class="text-end">End aligned text on all viewport sizes.</p>

        <p class="text-sm-end">End aligned text on viewports sized SM (small) or wider.</p>
        <p class="text-md-end">End aligned text on viewports sized MD (medium) or wider.</p>
        <p class="text-lg-end">End aligned text on viewports sized LG (large) or wider.</p>
        <p class="text-xl-end">End aligned text on viewports sized XL (extra large) or wider.</p>
        <p class="text-xxl-end">End aligned text on viewports sized XXL (extra extra large) or wider.</p>
      </div>
    </main>
  );
}
