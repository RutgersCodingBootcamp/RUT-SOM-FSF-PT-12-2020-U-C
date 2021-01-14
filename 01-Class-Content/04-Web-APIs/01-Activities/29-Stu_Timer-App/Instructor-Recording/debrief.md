# Debrief

## Questions

### Why did we create the reset function?

When you get to the later sections in the course, functions play an integral part
of code organization. The reset function is something I immediately identified as
changing the whole application's state and is typically done multiple times. (At page
load, when an important variable changes that in turn changes other variables like
working/rest toggle) Because of this, I knew that a function would allow me to clear
the interval (stop and reset the timer) whenever it was need. You create functions
when you need to have control over when it will run a set of code in javascript.

### Why have a render function?

When you get to the later sections in the course, functions play an integral part
of code organization. The render function plays an important role later when you get
to React, so it would be good to recognize how it works.

### Why not have both a minutes and seconds variable instead of a totalSeconds and elapsed seconds variable?

When you write code, you want to have the least complexity possible or abstract the
complexity so that it is only in one function/object. If you had a minutes and seconds
variable, it would be difficult to do a simple subtraction because you would have to 
manage two variables instead of one. If you did a comparison to see if the time is 
done, you would have to do two comparisons. If you wanted to reset elapsed time, you
would have to manage two variables.
