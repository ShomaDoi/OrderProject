import { createContext, useState } from "react";

const UserContext = createContext({
  progress: "",
  show: () => {},
  hide: () => {},
});

export function UserContextProvider({ children }) {
  const [showWindow, setShowWindow] = useState("");
  function show(showType) {
    setShowWindow(showType);
  }

  function hide() {
    setShowWindow('');
  }

  const userCtx = {
    progress: showWindow,
    show,
    hide,
  };
  return (
    <UserContext.Provider value={userCtx}>{children}</UserContext.Provider>
  );
}

export default UserContext;
