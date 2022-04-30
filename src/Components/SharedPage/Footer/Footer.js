import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white pb-5 pt-5">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-3 col-lg-3 mx-auto mt-3">
              <h5 className=" text-uppercase mb-4 font-weight-bold text-success">
                Address
              </h5>
              <p>
                <i className="fas fa-home mx-3"></i> Bangle Bazar, 1203 Dhaka.
              </p>
              <p>
                <i className="fas fa-envelope mx-3"></i>Email: abc@defgmail.com
              </p>
              <p>
                <i className="fas fa-phone mx-3"></i> + 01912345678
              </p>
              <p>
                <i className="fas fa-print mx-3"></i> + 01913456782
              </p>
            </div>
            <div className="col-md-2 col-lg-2 mx-auto mt-3">
              <h5 className=" text-uppercase mb-4 font-weight-bold text-success">
                Information
              </h5>
              <Link to="#" className="text-decoration-none text-white">
                About Us
              </Link>{" "}
              <br />
              <Link to="#" className="text-decoration-none text-white">
                Stores
              </Link>{" "}
              <br />
              <Link to="#" className="text-decoration-none text-white">
                The Providers
              </Link>{" "}
              <br />
              <Link to="#" className="text-decoration-none text-white">
                Contact us
              </Link>
              <br />
              <Link to="#" className="text-decoration-none text-white">
                Help
              </Link>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className=" text-uppercase mb-4 font-weight-bold text-success">
                Products Extras
              </h5>
              <Link to="#" className="text-decoration-none text-white">
                Prices drop
              </Link>
              <br />
              <Link to="#" className="text-decoration-none text-white">
                New products
              </Link>
              <br />
              <Link to="#" className="text-decoration-none text-white">
                Best sales
              </Link>
              <br />
              <Link to="#" className="text-decoration-none text-white">
                {" "}
                Contact us
              </Link>
              <br />
              <Link to="#" className="text-decoration-none text-white">
                {" "}
                Sitemap
              </Link>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className=" text-uppercase mb-4 font-weight-bold text-success">
                Stay Connected
              </h5>
              <p className="d-flex flex-row justify-content-center align-items-center ">
                <i class="fa-brands fa-facebook mx-3"></i>
                <br />
                <i class="fa-brands fa-twitter-square mx-3"></i> <br />
                <i class="fa-brands fa-google mx-3"></i>
                <br />
                <i class="fa-brands fa-youtube mx-3"></i>
              </p>
            </div>
            <hr className="mb-4" />
            <div className="col-md-7  col-lg-8">
              <p>
                Copyright &copy; 2022, All rights reserved by :{" "}
                <strong>The Treasure Chest</strong>
                <br />
                <strong>SHAMIMA NIJUM</strong>{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
