import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Login from "../Components/Logres/Login";
// import { Link, useNavigate } from "react-router-dom";

// import { useNavigate } from "react-router-dom";


// function navigation(params){
//     return{
//         type: NAVIGATE,
//         payload: params
//     }
// }


export const loginReducer = (email, password) => {
    // const navigation = useNavigate();
    return () => {

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
              <Login/>
            //   navigation(`/dashboard`);
            
              localStorage.setItem("account", email);
              localStorage.setItem("pass", password);
            }
          });
        })
        .catch((error) => {
          alert(error, "Error");
        });
    }
}