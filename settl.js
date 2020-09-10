"use strict";

// Settl: Yet another dating app for the true millenials. 
// #HonestDatingApps

console.log("Start dating with Settl, it's not only what you deserve, it's all you're gonna get.")
console.log(); // an empty line to make it look pretty

// Let's start with your name or whatever you wanna call yourself.
let name = prompt("What should be call you: ");

// Obligatory welcome message.
console.log("Hi " + name + ", welcome to settl, we can help you find someone who can put up with you.");

console.log(); // an empty line to make it look pretty

let insta = prompt("Before we begin, tell us your instagram id, since you're gonna want to talk there anyways.")

// Your very original witty bio.
let bio = prompt("Perfect, now tell us a thing or two about yourself: ");
console.log("Great, now let us move on to finding the 'one' for you.");

console.log(); // an empty line to make it look pretty

// Storing your name and likes into an array object.
let myProfile = [name, bio, insta];
console.log("Alright here's what we have so far about you: " + myProfile[0] + ", who says: " + myProfile[1] +
" and your instagram id: @" + myProfile[2]);

console.log(); // an empty line to make it look pretty


// people who you may end up with anyways
let match_names = ["Shivani", "Preeti", "Priya"];
let match_bio =   ["Looking for an adventure", "Live, love, laugh", "Into neuroscience, tech and comedy"];
let match_insta = ["notShivani", "notPreeti", "notPriya"]

// putting it all together
let match_profiles = [
  [match_names[0], match_bio[0], match_insta[0]], 
  [match_names[1], match_bio[1], match_insta[1]], 
  [match_names[2], match_bio[2], match_insta[2]]
  ];

console.log("Here are some people looking to settl :(");
console.log(); // an empty line to make it look pretty

function match() {
  for(let i = 0; i < match_profiles.length; i++) {
    let swipe = prompt(match_profiles[i][0] + ", who says: " + match_profiles[i][1] + ". Type 'ugh' or 'fine' to reject or select your 'match': ");

    if(swipe == 'fine') {
      console.log();
      console.log("Finally. You have settl'd for " + match_profiles[i][0] + " you can find her on insta @" + match_profiles[i][2]);
      break;
    }
  }
}

match();
