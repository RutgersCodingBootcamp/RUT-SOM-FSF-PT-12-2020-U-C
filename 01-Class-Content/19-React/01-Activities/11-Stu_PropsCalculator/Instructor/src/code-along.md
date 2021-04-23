Anthony Maddatu (Ins)  8:34 PM
@here CODE ALONG: add 4 main parts of a component
// import
import React from 'react';
// name
function Math(props){
    // render return
    return (
        <p>test</p>
    );
}
// export
export default Math;
:mango:
4
:rickroll:
3

8:37
@here CODE ALONG: import Math and use it inside the Parent component (Calculator)
:mango:
4
:mate_drink:
2

8:37
import Math from "./Math";
8:38
@here CODE ALONG: add props to the Math component inside the calculator file (edited) 
:mango:
6

8:42
@here CODE ALONG: use props inside the Math component in the Math file
:mango:
1
:code_cat:
3

8:46
@here CODE ALONG: add a switch for the plus operator in Math component file
8:46
// import
import React from 'react';
// name
function Math(props){
    let ans = 0;
    switch(props.operator){
        case "+":
            ans = props.num1 + props.num2;
        break;
    }
    // render return
    return (
        <span>{props.num1} {props.operator} {props.num2} = {ans}</span>
    );
}
// export
export default Math;
:mind_blown:
4

8:48
@here CODE ALONG: add other switch operators
8:48
// import
import React from 'react';
// name
function Math(props){
    let ans = 0;
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
    // render return
    return (
        <span>{props.num1} {props.operator} {props.num2} = {ans}</span>
    );
}
// export
export default Math;
8:51
@here CODE ALONG: We use the component in the calculator
import React from "react";
import Math from "./Math";
// Create a new component named "Math"
// Render one Math component in the place of each "?" mark
// Math should accept 3 props
// num1, operator, and num2
// Math should return a span tag displaying the result e.g.  19 + 341 = 360
function Calculator() {
  return (
    <div>
      {/* <p>19 + 341 = ?</p> */}
      <Math num1={19} operator={"+"} num2={341} />
      {/* <p>42 - 17 = ?</p> */}
      <Math num1={42} operator={"-"} num2={17} />
      {/* <p>100 * 3 = ?</p> */}
      <Math num1={100} operator={"*"} num2={3} />
      {/* <p>96 / 4 = ?</p> */}
      <Math num1={96} operator={"/"} num2={4} />
      <Math num1={11} operator={"+"} num2={11} />
    </div>
  );
}
export default Calculator;