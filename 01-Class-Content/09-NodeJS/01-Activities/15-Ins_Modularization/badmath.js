const pie = 'apple';

const predictable = () => 1;

const unpredictable = () => `Peter is ${Math.random()} * 1000`;

// module.exports is an object we use to store variables or methods
module.exports = {
  pie,
  predictable,
  peter: unpredictable
};
