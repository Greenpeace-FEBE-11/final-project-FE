import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const navigation = useNavigate();
  const [Id, setdataid] = useState();
  const HandleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("account");
    navigation(`/`);
  };

  // const setDataId=(Id)=>{
  //     axios("https://63528ae6a9f3f34c37409536.mockapi.io/profile",{
  //         id: Id
  //     }).then((result)=>{
  //         navigation(`/profile/${id}`)
  //     })
  // }

  return (
    <>
      {/* {setDataId.map((el)=> {
            return(
                <div>

                </div>
            )
        })} */}
      <nav className="navbar navbar-expand-lg navbg ">
        <div className="container-fluid pohonkita">
          <Link to="/dashboard">
            <img
              className="logofix"
              src="img/logofix.png"
              alt="VolunteGreen"
              width="150"
              srcSet="img/logofix.png 300w"
              sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav navmenu1">
              {/* <!-- DROPDOWN-------------------- --> */}
              <li className="nav-item dropdown">
                <p
                  className="nav-link dropdown-toggle navmenu "
                  id="menuu"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Menu
                </p>

                <ul className="dropdown-menu text-center" id="navdd">
                  <Link to={"/dampak"} style={{ textDecoration: "none" }}>
                    <li className="abc">
                      <p className="dropdown-item abc">
                        Informasi Dampak<br></br>Pencemarah Lingkungan
                      </p>
                    </li>
                  </Link>
                  <hr></hr>

                  <Link
                    to={"/penanggulangan"}
                    style={{ textDecoration: "none" }}
                  >
                    <li className="abc">
                      <p className="dropdown-item abc">
                        Informasi Penanggulangan<br></br>Bencana
                      </p>
                    </li>
                  </Link>
                  <hr></hr>

                  <li className="abc">
                    <a className="dropdown-item abc" href="#">
                      Komunitas
                    </a>
                  </li>
                </ul>
              </li>

              {/* <!-- Menu lainnya------------------------------- --> */}
              <li className="nav-item dropdown akun">
                <Link
                  to={"/abouut"}
                  style={{ textDecoration: "none" }}
                  className="nav-link navmenu"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown akun">
                <a className="nav-link navmenu" href="#contact">
                  Contact Us
                </a>
              </li>

              <li className="nav-item dropdown akun">
                <Link
                  to={"/profile"}
                  style={{ textDecoration: "none" }}
                  className="nav-link navmenu"
                >
                  <img src="img/avatar.png" width="60" />
                  Akun
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav navmenu1 akun">
              <li className="nav-item text-right dropdown ">
                <a className="nav-link navmenu" onClick={HandleLogout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
