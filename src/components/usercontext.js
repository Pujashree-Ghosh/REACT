import React from "react";

const UserContext = React.createContext("Pujashree");

const UserProvider = UserContext.UserProvider;
const UserConsumer = UserContext.UserConsumer;

export { UserProvider, UserConsumer };
export default UserContext;
