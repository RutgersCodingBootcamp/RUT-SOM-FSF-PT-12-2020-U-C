import React, { useContext } from 'react';
import UserContext from "./UserContext";

function ChangeNameButton(props){
    const {setName} = useContext(UserContext);
    function change(){
        const names = ["Anthony", "Bob", "Jimbo", "Pdubs"];
        // console.log(names[Math.floor(Math.random() * 4)]);
        setName(names[Math.floor(Math.random() * 4)])
    }
    return(
        <button onClick={change}> Change Name </button>
    )
}

export default ChangeNameButton;