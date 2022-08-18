import { createContext, useContext, useState } from "react";


const TodoValueContext =  createContext(undefined);

const TodoValueContextProvider = ({children}) => {
    const [todoValue , setTodoValue] =useState('');
    const context = useContext(TodoValueContext);
    return ( <TodoValueContext.Provider value={{todoValue , setTodoValue}}>
    {children}
    </TodoValueContext.Provider>);
}

const useTodoValueContext = () => {
    const context = useContext(TodoValueContext)
  
    if (context === undefined)
      throw new Error("useTheme must be within ThemeProvider!")
  
    return context
  }
export {useTodoValueContext , TodoValueContextProvider} ;
 
