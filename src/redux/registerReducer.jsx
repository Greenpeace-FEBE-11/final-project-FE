import axios from "axios";


export const registerReducer = ( username, email, password1, password2) => {
    return () => {

    axios("https://63528ae6a9f3f34c37409536.mockapi.io/logres", {
        username: username,
        email: email,
        password: password2,
      }) 
      .then(() => {
        if (password1 == password2) {
          axios.post("https://63528ae6a9f3f34c37409536.mockapi.io/logres", {
            username: username,
            email: email,
            password: password2,
          })
        //   navigation(`/`);
        //   console.log(result.data);
          alert("register success");
        } else if(password1!==password2) {
          alert("Tolong cek kembali data anda");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("error");
      });
    }
}