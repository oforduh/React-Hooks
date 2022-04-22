import { createContext, useContext, useState } from "react";

// 1st step
export const UserContext = createContext();

export const UserObject = () => {
  const { username, setusername } = useContext(UserContext);
  return { username, setusername };
};

// 2nd Step 2
export const UserProvider = ({ children }) => {
  const [username, setusername] = useState("");

  return (
    <UserContext.Provider value={{ username, setusername }}>
      {children}
    </UserContext.Provider>
  );
};
