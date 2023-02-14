import React from "react";
import HorizontalLinearStepper from "../horizontalLinearStepper/HorizontalLinearStepper";

function Header() {
  return (
    <div>
      <div
        data-collapse="medium"
        data-animation="default"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar w-nav"
        >
        <div className="navbar-wrap">
          <a href="/" className="brand w-nav-brand" aria-label="home">
            <img
              src="https://uploads-ssl.webflow.com/614a1ca9934d3f7e2d47575f/61645b9228d9cf22fbfe8f96_Logo%20(1).png"
              loading="eager"
              alt=""
              className="logo"
            />
          </a>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <a href="/for-patients" className="nav-link type-2 w-nav-link">
              For Patients
            </a>
            <a
              href="/for-payers-and-providers"
              className="nav-link type-2 w-nav-link"
            >
              For Providers
            </a>
            <a href="/news" className="nav-link type-2 w-nav-link">
              News
            </a>
            <a
              href="/about"
              aria-current="page"
              className="nav-link type-2 w-nav-link"
            >
              About
            </a>
            <a
              href="mailto:hey@wellinks.com"
              className="button-style-1 nav-bar w-button"
            >
              Get in touch
            </a>
          </nav>
          <div
            className="menu-button w-nav-button"
          //   style="-webkit-user-select: text;"
            aria-label="menu"
            role="button"
            tabindex="0"
            aria-controls="w-nav-overlay-0"
            aria-haspopup="menu"
            aria-expanded="false"
          >
            <div className="w-icon-nav-menu"></div>
          </div>
        </div>
        <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
      </div>
      <div class="section-hero-about wf-section">
        <div className="container">
          <div className="about-hero-wrap">
            <div className="subhead-small blue-color-text">ENROLLMENT</div>
            <h1 class="h1-hero black-color-text">
              Is Wellinks in your plan?
            </h1>
            <p class="subtext-home large black-color-text text-opacity-80">First, let’s find out if we partner with your health insurance.</p>
          </div>
          <div style={{marginBottom:'50px'}}>
            <HorizontalLinearStepper />
          </div>
        </div>
      </div>     
    </div>
  );
}

export default Header;
