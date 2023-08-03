import React from "react";
import { connect } from "react-redux";
import { setUser,exit,setStyleItem,setStatr,addMessage } from "./Actions.jsx";     // Імпортуємо різні дії з файлу Actions.jsx
import AppRouter from "./components/AppRouter.jsx";            // Імпортуємо компонент AppRouter з папки components

class AppView extends React.Component {                        // Класовий компонент AppView

  render() {  
    return (
      <div>
        <AppRouter   {...this.props} />  {/* Відображаємо компонент AppRouter з переданими пропсами */}
       
      </div>
    );
  }
}

const mapStateToProps = (state) => {                             // Функція, яка мапить стан Redux до пропсів компонента
    return {
      apiUser: state.apiUser,
      login: state.login,
      idUser:state.idUser,
      pageMain:state.pageMain,
      access_token:state.access_token,
      emailUser:state.emailUser,
      userName:state.userName,
      massages:state.massages,
      styleList:state.styleList,
      styleItem:state.styleItem,
      start:state.start,
      answerList:state.answerList,
      index:state.index,
    };

};

// З'єднуємо компонент AppView з Redux store та передаємо дії (actions) як пропси
export default connect(mapStateToProps, {setUser,exit,setStyleItem,setStatr,addMessage })(AppView);