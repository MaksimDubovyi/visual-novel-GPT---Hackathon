import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Authorization = ({ apiUser, ifExit, setUser}) => 
{
  const [UserName, setUserName] = useState("");
  const [UserPassword, setUserPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const CheckFill = () => {
    if (UserName === "") {
      setNameError("Поле має бути встановлене!");
      return false;
    } else {
      setNameError("");
    }
    if (UserPassword === "") {
      setPasswordError("Поле має бути встановлене!");
      return false;
    } else {
      setPasswordError("");
    }

    return true;
  };

     const data = new FormData();
      data.append("grant_type", "");
      data.append("username", UserName);
      data.append("password", UserPassword);
      data.append("scope", "");
      data.append("client_id", "");
      data.append("client_secret", "");

 const handleSubmit = (e) => {
   e.preventDefault();

   if (CheckFill()) {
    //  axios
    //    .post(apiUser + "/api/auth/login", data)
    //    .then((response) => {
    //      $("#CreateError").text("Вітаємо з успішною авторизацією!");
    //      setUserName("");
    //      setUserPassword("");

    //      let data = {
    //       userName:response.data.user_name,
    //        emailUser: UserName,
    //        pageMain: "/adminpage",
    //        access_token: response.data.access_token,
    //      };
         let data = {
          userName:UserName,
           emailUser: UserName,
           pageMain: "/adminpage",
           access_token: "",
         };
          setUser(data);

         navigate("/adminpage");
      //  })
      //  .catch((error) => {
      //    if (error.response.data.detail == "Invalid password") {
      //      $("#CreateError").text("Недійсний пароль, або емейл");
      //    }
      //  });
   }
 };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//        const url = "http://10.8.0.6:8000/api/user/set_new_password";
//        const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYWtzaW0yNGR1QGdtYWlsLmNvbSIsImlhdCI6MTY5MDYzOTE0OCwiZXhwIjoxNjkwNjQwMDQ4LCJzY29wZSI6ImFjY2Vzc190b2tlbiJ9.bH6fStMemBy0qFyhdKVm6jmxrqTRuO5wgPI877p3wvA" ; 
    
//       const headers = {
//         Accept: "application/json",
//         Authorization: token,
//         "Content-Type": "application/json",
//       };
    
//       const data = {
//         current_password: "111111",
//         new_password: "222222",
//         r_new_password: "222222",
//       };
    
//       axios.patch(url, data, { headers })
//         .then((response) => {
//           console.log("відповідь сервера:", response.data);
//         })
//         .catch((error) => {
//           console.error("error:", error);
//         });
  
//  };
    return (
      <div className="row" style={{position: "fixed", top:"40%",textAlign: "center",width:"100%"}}>
        <div className="col-md-4 offset-md-4">
          <form onSubmit={handleSubmit}>
            <div id="CreateError" className="text-danger"></div>
            <div className="form-group">
              <label className="control-label lable">Логін</label>
              <input onChange={(e) => setUserName(e.target.value)} id="Name_Cr" className="form-control str" />
              <span className="text-danger">{nameError}</span>
            </div>
            <div className="form-group">
              <label className="control-label lable">Пароль</label>
              <input onChange={(e) => setUserPassword(e.target.value)} id="Password_Cr" className="form-control str" type="password" />
              <span className="text-danger">{passwordError}</span>
            </div>
            <div className="form-group">
              <input type="submit" value="Авторизація" className="btn btn-primary button" />
            </div>
          </form>

          <div><Link to="/registration" className='txtMenu' style={{ color: '#0e96e0', padding: "0px 55px" }}><i className="bi bi-person-fill-add" style={{ margin: "10px" }}></i>Реєстрація</Link></div>
          <div style={{ margin: "20px" }}><Link to="/userpage" className='txtMenu' style={{ color: 'red', padding: "0px 68px" }}><i className="bi bi-box-arrow-left" style={{ margin: "10px" }}></i>головна</Link></div>
        </div>
      </div>
    );

};

export default Authorization;
