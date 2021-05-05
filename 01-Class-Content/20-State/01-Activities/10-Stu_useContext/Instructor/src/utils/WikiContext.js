// import
import React from 'react';

// name
const WikiContext = React.createContext({
    // default context and values
    search: "Wikipedia",
    title: "",
    url: "",
    error: "",
    setWiki: () => {}
});


// export
export default WikiContext;