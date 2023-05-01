// Write your code below this line
const decodeString = (str) => {
let decoder = Number(str[0])
console.log("Decoder:", decoder)
let answer = ""
let alphabet = "abcdefghijklmnopqrstuvwxyz"
    for (let i = 1; i < str.length; i++) {
        let letter = str[i]
        console.log(letter)
       let letterAt =  alphabet.search(letter)
       console.log("Letter At:",letterAt)
       let jumpNum = decoder + letterAt
       answer += alphabet[jumpNum]
       console.log("Answer:", answer)
    }
    return answer
}
decodeString("2fcjjm")