# Instructor's Hints

## Date Object API

I highly recommend that you guys use the date object as it is relatively easy
to use and will be on more interviews than MomentJS will be. It is mainly
because it is part of the native JS engine functionality.

```
var mons = ["Jan", "Feb", "Mar"];
mons[(new Date()).getMonth()]

"Jan"

var days = ["Sunday", "Monday", "Tuesday"];
days[(new Date()).getDay()]

"Tuesday"

if(i === 12){
    chosenTag.css(["background-color", "red"]);
    chosenTag.addClass("red-class");
}
if((new Date()).getHours() === i){ // uses military time 0-23 for hours
    chosenTag.addClass("red-class");
}
```

## List of things needed

* jQuery
* Momentjs is allowed but not required
* Date object usage is preferred
* css classes/rules will need to be applied