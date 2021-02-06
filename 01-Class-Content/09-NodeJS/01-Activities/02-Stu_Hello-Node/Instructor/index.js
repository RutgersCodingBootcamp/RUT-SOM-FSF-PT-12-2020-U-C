const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is you favorite mushroom? ", function(name) {
    rl.question("Where do you surf? ", function(place) {
        console.log(`You like ${name},  and surf in ${place}`);
        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});