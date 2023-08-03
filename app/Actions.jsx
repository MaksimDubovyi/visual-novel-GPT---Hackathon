
export const setUser = (event) => ({                    // Функція для встановлення користувача
  type: "SET_USER",
  event
});

export const exit = () => ({                            // Функція для виходу
  type: "EXIT",
});

export const login = () => ({                           // Функція для входу
  type: "LOGIN",
});


export const setStyleItem = (event) => ({                           // Функція для входу
  type: "STYLE_ITEM",
  event
});

export const setStatr = (event) => ({                           
  type: "SET_START",
  event
});

export const addMessage = (event) => ({                           
  type: "ADD_MESSAGE",
  event
});
