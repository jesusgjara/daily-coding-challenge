// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// Answer 1

// function correct(string)
// {
//   let a = /0/gi
//   let b = /1/gi
//   let c = /5/gi
// return string.replace(a, 'O').replace(b, 'I').replace(c, 'S')
// }

// Answer 2

correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')