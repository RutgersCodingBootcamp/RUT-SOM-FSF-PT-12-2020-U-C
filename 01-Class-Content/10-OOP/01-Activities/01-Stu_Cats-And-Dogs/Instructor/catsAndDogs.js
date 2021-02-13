// * Make a dogs object with three keys:
let dogs = {
    //   * First key called "raining" with a value of true
    raining: true,
    //   * Second key called "noise" with a value of "Woof!"
    noise: "Woof!",
    //   * Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining dogs
    makeNoise: function(){
        if(this.raining){
            console.log(this.noise);
        }
    }
};
// * Next make a cats object with three keys:
let cats = {
    //   * First key called "raining" with a value of false
    raining: false,
    //   * Second key called "noise" with a value of "Meow!"
    noise: "Meow!",
    //   * Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining cats
    makeNoise: function(){
        if(this.raining){
            console.log(this.noise);
        }
    }
}
// * Make the dog bark
dogs.makeNoise();
// * Make the cat meow
cats.makeNoise();