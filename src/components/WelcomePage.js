import React from "react";
import { Header } from "../components/Header";
import "../css/mycustom.css";
import logo from "../images/ucsc_logo.jpeg";

export const WelcomePage = () => (
  <div>
    <div>
      <Header></Header>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 jumbotron">
          <p>
            <strong>
              The University of Colombo School of Computing (UCSC)
            </strong>
            is a higher educational institute affiliated to the University of
            Colombo in Sri Lanka providing Computer Science, Information Systems
            and Information and Communication Technology education. The UCSC is
            considered as the leading computing higher educational institution
            in Sri Lanka.
            <br />
            <strong>The Professional Development Centre (PDC)</strong> is one of
            the centers at UCSC, established to keep a close liaison with the IT
            industry to improve the academic activities through
            industry-academia partnership. The mission of the Professional
            Development Center is to produce socially responsible professionals
            with entrepreneurial skills, leadership qualities, and integrity.
            The center facilitates training programs to improve the professional
            skills of both the academic staff and the undergraduates. The PDC
            invites the IT industry to conduct awareness programs such as
            current trends in the IT industry, industrial practices, career
            paths in various disciplines, and, thus, creating value addition to
            enhance overall graduate quality and employability.
          </p>
        </div>
        <div className="col-lg-6 ">
          <img className="ucsc_logo" src={logo}></img>
        </div>
      </div>
      <div className="row login_btn">
        <button type="button" className="btn btn-primary btn-lg">
          Login
        </button>
      </div>
    </div>
  </div>
);
