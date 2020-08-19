//Business Logic
function pigLatin(sentence) {
  if(sentence[0].toLowerCase() === 'a' || sentence[0].toLowerCase() === 'e'||sentence[0].toLowerCase() === 'i'||sentence[0].toLowerCase() === 'o'||sentence[0].toLowerCase() === 'u')
  {
    console.log(sentence);
    return sentence.concat('way');
  }
}

// The first test
Describe: pigLatin()   
Test: "It will add 'way' to the end of words that begin with a vowel"
Expect(pigLatin("apple")).toEqual("appleway");

// // The second test 
// Describe:`pigLatin()` 
// Test:"It will move all of the first consecutive consonants to the end, and add 'ay'"
// Expect(pigLatin("johnny")).toEqual("ohnnyjay")

// // The third test
// Describe:`pigLatin()` 
// Test:"It will move constants 'qu' at the begining to the end"
// Expect(pigLatin("queen")).toEqual("eenqu")

// // The fourth test
// Describe:`pigLatin()` 
// Test:"It will treat 'y' at the begining of a word as a consonant and move it to the end and add 'ay'"
// Expect(pigLatin("yankee")).toEqual("ankeeyay")


// // User Interface Logic
// $(document).ready(function() {
//   $("#formOne").submit(function() {
//     // Start with Ui after checking the pass test.
//   })
// })