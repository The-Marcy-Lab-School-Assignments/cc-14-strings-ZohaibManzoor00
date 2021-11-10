const stripUpperCase = str => {
// Initialize empty strings to hold lowercased values
  let lowerCased = "";
// Loop through the str
  for (const i of str) {
// Check if any character is lowercased
    if(i === i.toLowerCase()) {
// Push the values that evaluate to true into variable
      lowerCased += i;
    }
// Return the variable 
  }return lowerCased;
};
console.log(stripUpperCase("ilOvEcOdInG...!"));
