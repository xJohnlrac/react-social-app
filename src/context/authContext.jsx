import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  const login = () => {

    setCurrentUser({id: 1, name: 'John Carl', profilePic: 'https://i.pinimg.com/474x/8a/eb/e2/8aebe29132cb9464445a752f2511507b.jpg'})
    //TO DO
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser))
  }, [currentUser])


  return (
    <AuthContext.Provider value={{currentUser, login}}>
      {children}
    </AuthContext.Provider>
  )
};