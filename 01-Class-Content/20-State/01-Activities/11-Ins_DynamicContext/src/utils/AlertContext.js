// import
import React from "react";
// default context object with properties corresponding to Provider values
// name
const AlertContext = React.createContext({ // set default context and values
  display: false,
  msg: "default value",
  theme: "",
  onClick: () => undefined
});

// export
export default AlertContext;
