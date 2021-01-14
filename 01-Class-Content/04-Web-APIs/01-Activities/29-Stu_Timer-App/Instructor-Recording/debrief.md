# Debrief

## Questions

### Why did we create the reset function?

When you get to the later sections in the course, functions play an integral part
of code organization. The reset function is something I immediately identified as
changing the whole application's state and is typically done multiple times. (At page
load, when an important variable changes that in turn changes other variables like
working/rest toggle) Because of this, I knew that a function would allow me to clear
the interval (stop and reset the timer) whenever it was needed. You create functions
when you need to have control over when your script will run a set of code in
javascript.

### Why have a render function?

When you get to the later sections in the course, functions play an integral part
of code organization. The render function plays an important role later when you get
to React, so it would be good to recognize how it works. You create functions
when you need to have control over when your script will run a set of code in
javascript.

### Why not have both a minutes and seconds variable instead of a totalSeconds and elapsed seconds variable?

When you write code, you want to have the least complexity possible or abstract the
complexity so that it is only in one function/object. If you had a minutes and seconds
variable, it would be difficult to do a simple subtraction because you would have to
manage two variables instead of one. If you did a comparison to see if the time is
done, you would have to do two comparisons. If you wanted to reset elapsed time, you
would have to manage two variables.

### Why are you constantly writing commentary?

With my short attention span, I constantly forget what I'm doing. The commentary helps
me stay on track even without context and very little prompting. If you are having
troubling following me, I can almost guarantee that you are not writing the commentary
in your own words. I have been doing this for many years. I interview top end
developers and regular throw questions out of context at them. So, in order to be the
best at interviews from my viewpoint, you must be able to understand and write
commentary otherwise, you won't even pass the first round with me. The first round is
a telephone inteview with me (especially now in 2021) when I hire new developers. With
commentary, you build the context upon which you can write code.
