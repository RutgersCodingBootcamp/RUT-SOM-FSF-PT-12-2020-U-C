// import
import React from 'react';



// name
function Math(props){
    let ans = 0;
    let styles = {
        span: {}
    };
    switch(props.operator){
        case "+":
            ans = props.num1 + props.num2;
        break;
        case "-":
            ans = props.num1 - props.num2;
        break;
        
        case "*":
            ans = props.num1 * props.num2;
        break;
        case "/":
            ans = props.num1 / props.num2;
        break;
    }
    styles.span.fontSize = ans * .2 + "px";
    // render return
    return (
        <>
        <span style={styles.span}>{props.num1} {props.operator} {props.num2} = {ans}</span>
        
        <br/>
        </>
    );
}
// export
export default Math;