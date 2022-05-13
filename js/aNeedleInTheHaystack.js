// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5" (in COBOL "found the needle at position 6")

//PREP
//Parameters: array of strings
//Return: message as string "found the needle at position" + index it found needle

function findNeedle(arr) {
    //create a for loop
    for (let i = 0; i <= arr.length; i++) {
        //create a conditional 
        if (arr[i] === 'needle') {
            //return
            return `found the needle at position ${i}`
        }
    }
}

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']) //"found the needle at position 5"
findNeedle(['hay', 'needle', 'hay', 'hay', 'moreJunk', 'extraJunk', 'randomJunk']) //"found the needle at position 1"
findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'aha', 'needle']) //"found the needle at position 6"