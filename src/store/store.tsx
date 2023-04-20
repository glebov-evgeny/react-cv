import React, {useState, useEffect} from "react";

const AllContext = React.createContext({
  colorTheme: false,
  changeColorTheme: () => {},
  menuIsOpen: false,
  changeMenuIsOpen: () => {},
  isLogged: false,
  onLogout: () => {},
  onLogin: (email:string, password:string) => {},
})

export const AllContextProvider = (props:any) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isColorTheme, setIsColorTheme] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    const isUserLogged = localStorage.getItem('userAuth');

    if (isUserLogged === 'yes') {
      setIsLogged(true);
    }
  }, []);

  const loginOut = () => {
    localStorage.removeItem('userAuth');
    setIsLogged(false)
  }

  const changeColorTheme = () => {
    setIsColorTheme(!isColorTheme)
  }
  useEffect(() => {
    document.body.classList.toggle('dark-themes', isColorTheme);
  },[isColorTheme])

  const openMenuHandled = () => {
    setMenuIsOpen(!menuIsOpen);
  }

  const onLogin = () => {
    localStorage.setItem('userAuth', 'yes');
    setIsLogged(true)
  }

  return <AllContext.Provider value={{ 
    colorTheme: isColorTheme,
    changeColorTheme: changeColorTheme,
    menuIsOpen: menuIsOpen,
    changeMenuIsOpen: openMenuHandled,
    isLogged: isLogged,
    onLogout: loginOut,
    onLogin: onLogin,
  }}>{props.children}</AllContext.Provider>
}

export default AllContext;