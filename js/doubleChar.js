// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
    const arr = str.split('')
    let result = []
    arr.forEach(elem => {
      result.push(elem.repeat(2))
    })
      return result.join('')
  }
  