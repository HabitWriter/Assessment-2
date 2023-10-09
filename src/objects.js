// Unit 2 Assessment: objects.js

// Given an array of objects representing people, return a new array of just
// their full (first name and last name) names.
//
// Each object will be structured like so:
// { firstName: 'Dame', lastName: 'Aylin', location: 'Reithwin' }
//
// Ex.:
//   getNames([
//     { firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' },
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Karlach', lastName: 'Cliffgate', location: 'Avernus' }
//   ]);
//   => ['Gale Dekarios', 'Wyll Ravengard', 'Karlach Cliffgate'];
function getNames(people) {
  let namesArr = []
  
  for (let person of people) {
    if (person.firstName) {
    let name = person.firstName + " " + person.lastName;
    namesArr.push(name);
    }
  }

  return namesArr
  
}

// Given an object representing a person, return their full name (first name and last name).
// You MUST use object destructuring in your solution.
//
// Each object will be structured like so:
// { firstName: 'Dame', lastName: 'Aylin', location: 'Reithwin' }
//
// Ex.:
//   getName({ firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' });
//   => 'Gale Dekarios'
function getNameUsingDestructuring(person) {
  const {firstName, lastName} = person
  
  return firstName + " " + lastName
}

// Given an array of objects representing people, return a new array of the
// people matching the given location.
//
// Each object will be structured like so:
// { firstName: 'Dame', lastName: 'Aylin', location: 'Reithwin' }
//
// Ex.:
//   getPeopleByLocation([
//     { firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' },
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Karlach', lastName: 'Cliffgate', location: 'Avernus' }
//     { firstName: 'Astarion', lastName: 'Ancunin', location: "Baldur's Gate" }
//   ], "Baldur's Gate");
//   => [
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Astarion', lastName: 'Ancunin', location: "Baldur's Gate" }
//   ];
function getPeopleByLocation(people, location) {
  
  function locationChecker(person) {
    if (person.location === location) {
      return true
    } else {
      return false
    }
  }
  
  return people.filter(locationChecker)
}

// Translate a phrase to pirate talk.
//
// Given an English phrase, use the EN_PIRATE_LOOKUP object to translate words
// to pirate talk. Words that aren't listed in the lookup object should not be
// translated and should pass through unchanged.
//
// The given phrase will be normalized so it'll never contain punctuation and
// will only consist of lowercased letters.
//
// Ex.:
//   translateToPirateTalk('excuse me sir where is the restroom');
//   => 'avast me matey where be the head'
const EN_PIRATE_LOOKUP = {
  excuse: 'avast',
  sir: 'matey',
  is: 'be',
  restroom: 'head',
  student: 'swabbie',
  friend: 'matey',
  restaurant: 'galley',
  your: 'yer',
  are: 'be',
  my: 'me',
  hotel: 'fleabag inn',
  hello: 'ahoy',
};

function translateToPirateTalk(phrase) {
  // Create an array with all the words in the string
  const wordArr = phrase.split(" ");
  
  // Create a lookup array to search the keys
  const lookUpArr = Object.keys(EN_PIRATE_LOOKUP)
  
  
  let index = 0
  // First check if the word shows up in the lookUpArr array.
  for (let word of wordArr) {
      
      // If the lookup is successful, change the word
      if (lookUpArr.includes(word)) {
          let newWord = EN_PIRATE_LOOKUP[word];
          wordArr.splice(index,1,newWord)
    }

    index++

  // Then we need to concatenate the array back into a string.
      }
  const newPhrase = wordArr.join(' ')
    
  return newPhrase
  }

// Return the number of occurrences of each word in a string.
// This function doesn't handle punctuation and is case-sensitive, so you can
// count 'hello!', 'hello', and 'Hello' as different words.
//
// Ex.:
//   wordCount('hello world')
//   => { hello: 1, world: 1 }
function wordCount(str) {
  // split the string into an array
  const wordArr = str.split(" ");
  
  const finalWordObj = {}

  for(let word of wordArr) {
    // get the index of the current word when ran through the filter function
    let index = wordArr.indexOf(word)
    // Create a duplicate array so we don't mess with the original
    let newWordArr = [...wordArr]
    newWordArr.splice(index,1)
    
      // if it ISN'T in the rest of the array and it hasn't been entered in the object
    if (!newWordArr.includes(word) && !finalWordObj[word]) {
      finalWordObj[word] = 1
    } 
    
      // If it IS in the rest of the array and hasn't been added to the object

    else if(newWordArr.includes(word) && !finalWordObj[word]) {
      finalWordObj[word] = 1
    }

      // If it IS in the rest of the array and has been added
      else {
          finalWordObj[word]++
      }   
  }
  return finalWordObj
}

// Given an object representing a bug, return true if the given bug is
// available in the given month.
//
// Each bug object will be structured like so:
// {
//   name: 'common butterfly',
//   availability: {
//     rarity: 'common',
//     months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
// }
//
// Ex.:
//   isBugAvailable({
//     name: 'common butterfly',
//     availability: {
//       rarity: 'common',
//       months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
//     }
//   }, 1);
//   => true
function isBugAvailable(bug, month) {
  if (bug.availability.months.includes(month)) {
    return true
  } else {
    return false
  }
}

// Given an array of objects representing bugs, return an object that'll be
// used to build a calendar. The keys of the object should be the months of the
// year, and the values should be the names of bugs available in that month.
//
// Each bug object will be structured like so:
// {
//   name: 'common butterfly',
//   availability: {
//     rarity: 'common',
//     months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
// }
//
// Ex.:
//   const bugs = [
//     {
//       name: 'peacock butterfly',
//       availability: {
//         rarity: 'common',
//         months: [1, 2, 3],
//       },
//     },
//     {
//       name: 'yellow butterfly',
//       availability: {
//         rarity: 'common',
//         months: [3],
//       },
//     },
//   ];
//   buildBugHuntCalendar(bugs);
//   => {
//     1: ['peacock butterfly'],
//     2: ['peacock butterfly'],
//     3: ['peacock butterfly', 'yellow butterfly'],
//     4: [],
//     5: [],
//     ...
//     11: [],
//     12: [],
//   }

function buildBugHuntCalendar(bugs) {
    
  //establish months data

  const BugHuntCalendar = {}
  for (let i = 1; i < 13; i++){
    BugHuntCalendar[i] = []
  }

  // for each bug in the bugs array
  for (let bug of bugs) {
      
      // I want you to check if they are available during a specific month
      for (let i = 1; i < 13; i++){
          
          //if they are, add them to that month's array in the calendar object
          if (isBugAvailable(bug,i)) {
              console.log(i);

              BugHuntCalendar[i].push(bug.name)
          }
        }
  }

  return BugHuntCalendar




}

export {
  buildBugHuntCalendar,
  getNameUsingDestructuring,
  getNames,
  getPeopleByLocation,
  isBugAvailable,
  translateToPirateTalk,
  wordCount,
};
