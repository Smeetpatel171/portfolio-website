import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

export default function Header() {
//logic for "when we click on any nav-item in navbar toggler button then the navbar should close."


  //logic for Making the navbar sticky when the pageYoffest.
  //it is much more similer to the scrollToTop button.
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //stroing the class in a variable as we need to add this along with jsx statement.
  const navbarclass = "nav-link";
  const parentnavbarclass = "navigation-bar";
  const location = useLocation();

  return (
    <>
      <header className={`${isSticky ? "sticky" : ""} ${parentnavbarclass}`}>
        <div className="container">
          <div className="row">
            <div className="col">
              <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand brandlogo" to="/">
                  <h1>
                    <b>Smeet</b>
                    <span style={{ color: "#683d4a" }}>.</span>
                  </h1>
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse navitems"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link
                        className={`${
                          location.pathname === "/" ? "active" : ""
                        } ${navbarclass}`}
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={`${
                          location.pathname === "/about" ? "active" : ""
                        } ${navbarclass}`}
                        aria-current="page"
                        to="/about"
                      >
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={`${
                          location.pathname === "/projects" ? "active" : ""
                        } ${navbarclass}`}
                        aria-current="page"
                        to="/projects"
                      >Projects
                      </Link>
                    </li>
                   
                    <li className="nav-item">
                      <Link
                        className={`${
                          location.pathname === "/services" ? "active" : ""
                        } ${navbarclass}`}
                        aria-current="page"
                        to="/services"
                      >
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={`${
                          location.pathname === "/testimonials" ? "active" : ""
                        } ${navbarclass}`}
                        aria-current="page"
                        to="/testimonials"
                      >
                        Testimonials
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={`${
                          location.pathname === "/contact" ? "active" : ""
                        } ${navbarclass}`}
                        aria-current="page"
                        to="/contact"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
