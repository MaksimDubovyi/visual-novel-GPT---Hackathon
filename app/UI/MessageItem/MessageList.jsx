import React from "react"
import MessageItem from './MessageItem.jsx'
import classes from './MessageItem.module.css'
import classPage from '../../pages/page.module.css'
class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: "",
      txtError: "",
    };
  }

  CheckFill = () => {
    let Txt_Cr = document.getElementById("Txt_Cr").value;
    if (Txt_Cr === "") {
      this.setState({ txtError: "Поле має бути встановлене!" });
      return false;
    } else {
      this.setState({ txtError: "" });
    }
    return true;
  };

  Click = (e) => {
    e.preventDefault();
    if (this.CheckFill()) {

      console.log(this.state.txt);
      document.getElementById("Txt_Cr").value = "";

      const url = "http://10.8.0.6:8000/api/user/set_new_password";
      //const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYWtzaW0yNGR1QGdtYWlsLmNvbSIsImlhdCI6MTY5MDYzOTE0OCwiZXhwIjoxNjkwNjQwMDQ4LCJzY29wZSI6ImFjY2Vzc190b2tlbiJ9.bH6fStMemBy0qFyhdKVm6jmxrqTRuO5wgPI877p3wvA" ; 
      const token = "Bearer "+this.props.access_token; 
     const headers = {
       Accept: "application/json",
       Authorization: token,
       "Content-Type": "application/json",
     };
   
     const data = {
      answerList: this.props.answerList,
      index:this.props.index,
     };
     
     this.props.addMessage(data)
     // axios.patch(url, data, { headers })
     //   .then((response) => {
     //     console.log("відповідь сервера:", response.data);
    //        this.props.addMessage()
     //   })
     //   .catch((error) => {
     //     console.error("error:", error);
     //   });

    }
  };

  render() {
    const { start, massages } = this.props;
    const display = start !== false ? "block" : "none";

    return (
      <div className={classPage.itemPage}>
        {massages.map((item, index) => (
          <MessageItem item={item} key={index + 1} userName={this.props.userName}/>
        ))}

        <div style={{ display }}>
          <span className="text-danger" style={{ fontSize: "35px", fontWeight: "bolder", color: "#f50202" }}>
            {this.state.txtError}
          </span>
          <form>
            <input className={classes.FormInput}
              onChange={(e) => this.setState({ txt: e.target.value })}
              id="Txt_Cr"
            ></input>
            <button className={classes.request__button} onClick={this.Click}>
              Відправити
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default MessageList;
