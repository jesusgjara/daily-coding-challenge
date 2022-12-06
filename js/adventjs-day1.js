// Este año los elfos han comprado una máquina que envuelve regalos. Pero… ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea.

// A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.

// El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * de forma que rodee totalmente al string por todos los lados. Por ejemplo:

// const gifts = ['cat', 'game', 'socks']
// const wrapped = wrapping(gifts)

// console.log(wrapped)
// /* [
//   "*****\\n*cat*\\n*****",
//   "******\\n*game*\\n******",
//   "*******\\n*socks*\\n*******"
// ] */
// Como ves, el papel de regalo envuelve el string. Por arriba y por abajo, para no dejar ningún hueco, las esquinas también están cubiertas por el papel de regalo.

// Nota: El carácter \n representa un salto de línea.

// ¡Ojo! Asegúrate que pones el número correcto de * para envolver completamente el string. Pero no demasiados. Sólo los necesarios para cubrir el string.

// Ah, y no modifiques (mutes) el array original.

function wrapping(gifts) {
    let result = []
    let mappedArr = gifts.map(element => {
        let elementLength = element.length
        let count = "**"
        for (let i = 0; i < elementLength; i++) {
            count += "*"
        }
        result.push(`${count}\n*${element}*\n${count}`)
    })  
    return result
  }
  