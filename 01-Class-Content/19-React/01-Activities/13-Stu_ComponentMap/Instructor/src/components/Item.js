// Import
import React from "react";

// name (function or class)
function Item(props){
    // render return XML
    return (
        <li className="list-group-item">{props.name} {props.purchased ? <>&#10003;</> : "" }</li>
    )
}
// Export
export default Item;