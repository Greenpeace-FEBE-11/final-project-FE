// import Logo from "/public/LogresAssets/img/logo.png";
import "/src/css/Logres.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomePage from "../../Pages/HomePage";

const Login = () => {
  const cekEmail = localStorage.getItem("account");
  const cekPassword = localStorage.getItem("pass");

  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=>{
    if(cekEmail&&cekPassword){
      navigation(`/dashboard`)
    }else{
      navigation(`/`)
    }
  },[cekEmail])

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleBtn = (e) => {
    e.preventDefault();
    console.log({ email, password });
    axios.get("https://63528ae6a9f3f34c37409536.mockapi.io/logres", {
      email: email,
      password: password,
    })
      .then((result) => {
        if(email==""&& password==""){
          alert("masukkan email dan password anda");
        }
        result.data.forEach((element) => {
          if (element.email === email && element.password === password) {
            console.log("succes");
            navigation(`/dashboard`);
            localStorage.setItem("account", email);
            localStorage.setItem("pass", password);
          }
        });
      })
      .catch((error) => {
        alert(error, "Error");
      });
  };
  
  return (
    <>
        <section className="container-xxxl">
          <div className="row" id="logre">
          <div className="col volunteelore">
            <h1 style={{textAlign: "center", paddingLeft: "4.6rem"}}>VolunteGreen</h1>
            {/* <img id="logre"  src="/LogresAssets/img/Mountain.jpg" /> */}
            </div>

              <div className="col">
                {cekEmail ? (
                  <HomePage/>
                ) : (
                  <form id="form" style={{paddingLeft: "9rem"}}>
                    <br/><br/>
                    <h1 className="text-center">LOGIN</h1>
                    <div className="col">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email-login"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={handleEmail}
                      />
                    </div>
                    <div className="col">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password-login"
                        value={password}
                        onChange={handlePassword}
                      />
                    </div>
                    <div className="text-center d-grid gap-2">
                      <br/>
                      <button
                        type="submit"
                        className="btn btn-success"
                        // style="--bs-bg-opacity: 0.5"
                        id="btn-login"
                        onClick={handleBtn}
                      >
                        Submit
                      </button>
                      <Link to={"/register"} style={{ textDecoration: "none" }}>
                        Belum punya akun?
                      </Link>
                    </div>
                  </form>
                )}
              </div>
          </div>
        </section>
    </>
  );
};
export default Login;
