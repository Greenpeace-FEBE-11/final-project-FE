import React from "react";

function AdminTopBar() {
  return (
    <>
      <nav className="col navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/* <!-- Sidebar Toggle (Topbar) --> */}
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars"></i>
        </button>

        {/* <!-- Topbar Search --> */}
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
            <strong style={{color:"gray"}}>Selamat datang, Admin !</strong>
            {/* <input
              type="text"
              className="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            ></input> */}
            {/* <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search fa-sm"></i>
              </button>
            </div> */}
          </div>
        </form>
        {/* <!-- Topbar Navbar --> */}
        <ul className="navbar-nav ml-auto">
          <div className="topbar-divider d-none d-sm-block"></div>

          {/* <!-- Nav Item - User Information --> */}
          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              <img src="./img/avatar.png" width="60"/>              
              </span>
            </a>
          </li>
        </ul>
      </nav>
      {/* <!-- End of Topbar --> */}





    </>
  );
}

export default AdminTopBar;
