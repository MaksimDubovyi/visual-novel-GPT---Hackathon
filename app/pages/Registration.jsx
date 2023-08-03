import React from "react";
import axios from 'axios';
class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);

  }
     onChangeName(e) { this.setState({ UserName: e.target.value }); }
     onChangePassword(e) { this.setState({ UserPassword: e.target.value });}
     onChangeEmail(e) { this.setState({ UserEmail: e.target.value });}

      
     CheckFill() {
        let Name = $("#Name_Cr").val();
        let Password = $("#Password_Cr").val();
        let PasswordConfirm = $("#PasswordConfirm_Cr").val();
        let Email = $("#Email_Cr").val();
        
        if (Name == "") {
            $("#Name_CrError").text("Поле має бути встановлене!");
            return false;
        }
        else
            $("#Name_CrError").text("");
        if (Password == "") {
            $("#Password_CrError").text("Поле має бути встановлене!");
            return false;
        }
        else
            $("#Password_CrError").text("");
        if (PasswordConfirm == "") {
            $("#PasswordConfirm_CrError").text("Поле має бути встановлене!");
            return false;
        }
        else
            $("#PasswordConfirm_CrError").text("");
        if (Email == "") {
            $("#Email_CrError").text("Поле має бути встановлене!");
            return false;
        }
        else
            $("#Email_CrError").text("");
        if (Password != PasswordConfirm) {
            $("#PasswordConfirm_CrError").text("Паролі не рівні!");
            return false;
        }
        else
            $("#PasswordConfirm_CrError").text("");

        if (Password.length < 6)
        {
            $("#Password_CrError").text("Довжина пароля має бути від 6 символів!");
            return false;
        }

       

        return true;
    }
    handleSubmit(e) {
        e.preventDefault();
       if( this.CheckFill())
       {


    let data=
    {
      username:this.state.UserName,
      email: this.state.UserEmail,
      password: this.state.UserPassword
    }
    console.log(data)
        axios.post(this.props.apiUser+"/api/auth/signup", data)
            .then((response) => {
              console.log(response)
                $("#CreateError").text("Вітаємо з успішною реєстрацією!");
                $("#Name_Cr").val("");
                $("#Password_Cr").val("");
                $("#PasswordConfirm_Cr").val("");
                $("#Email_Cr").val("");
            })
            .catch((error) => {
              if (error.response && error.response.data) {
                const responseText = error.response.data;
              $("#CreateError").text(responseText); }
            });
       }
    }
  render() {
    return (
      <div className="row"  style={{position: "fixed", top:"40%",textAlign: "center",width:"100%"}}>
        <div className="col-md-4 offset-md-4">
          <form encType="multipart/form-data" onSubmit={this.handleSubmit}>
            <div id="CreateError" className="text-danger"></div>
            <div className="form-group">
              <label className="control-label lable">Ім'я</label>
              <input
                onChange={this.onChangeName}
                id="Name_Cr"
                className="form-control str"
              />
              <span id="Name_CrError" className="text-danger"></span>
            </div>
            <div className="form-group">
              <label className="control-label lable">Пароль</label>
              <input
                onChange={this.onChangePassword}
                id="Password_Cr"
                className="form-control str"
                type="password"
              />
              <span id="Password_CrError" className="text-danger"></span>
            </div>
            <div className="form-group">
              <label className="control-label lable">Підтвердити пароль</label>
              <input
                id="PasswordConfirm_Cr"
                className="form-control str"
                type="password"
              />
              <span id="PasswordConfirm_CrError" className="text-danger"></span>
            </div>
            <div className="form-group">
              <label className="control-label lable">Електронна пошта</label>
              <input
                onChange={this.onChangeEmail}
                id="Email_Cr"
                className="form-control str"
                required
              />
              <span id="Email_CrError" className="text-danger"></span>
            </div>
            
           
            <div className="form-group">
              <input
                type="submit"
                value="Реєстрація"
                className="btn btn-primary button"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Registration;
