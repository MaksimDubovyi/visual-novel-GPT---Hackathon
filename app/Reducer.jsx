const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STATE":                                  // Перезаписуємо поточний стан з даними з дії
      return {
        ...state,
        ...action.state,
      };
    case "SET_USER":                                   // Встановлюємо дані користувача 
      return {
        ...state,
        userName: action.event.userName,
        emailUser: action.event.emailUser,
        pageMain: action.event.pageMain,
        access_token:action.event.access_token
      };
      case "STYLE_ITEM":    
      let item=action.event;
      return {
        ...state,
       styleItem: item,
      };
      case "SET_START":  
      console.log(action.event)
      let temp={
        name: action.event.sms,
        img:"https://sm.ign.com/t/ign_nordic/preview/t/the-rise-o/the-rise-of-the-dragon-preview-of-the-house-of-the-dragon-ar_qysj.1200.jpg",
          p:"В давні часи, коли магія і чарівні створіння керували світом, існувало два потужних дракона — Дракон Вогню і Дракон Льоду. Вони володіли величезною силою та могутніми чарами, і обидва проживали у своїх власних королівствах, зберігаючи мирне співіснування."
      }  
      return {
        ...state,
       start: action.event.start,
       massages: [...state.massages, temp],
      };
      case "ADD_MESSAGE":   
      if(action.event.index>5)
           {return {
            ...state,
            index:0
          }}
      let i=action.event.index+1;
      let message=action.event.answerList[action.event.index]
      return {
        ...state,
        massages: [...state.massages, message],
        index:i,
      };
      
    case "EXIT":                                       // Повертаємо початковий стан з очищеними даними користувача та сокета
      return {
        // Musics: state.Musics,
        // ifExit: false,
        // apiUser: "",
        // apiMusic: "",
        // avatar: "",
        // login: "",
        // idUser: "",
        // newMusics: [],
        // socketConnected: false,
        // socketUserId: "",
      };
    default:
      return state;
  }
};

export default reducer;
