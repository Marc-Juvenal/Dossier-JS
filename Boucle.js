const hiddenMessage = [
    "X", "X", "X", "X", "W", "X", "E", "X", "X", "X", "X", "X", "L", 
    "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", 
    "X", "X", "X", "X", "X", "X", "L", "X", "X", "X", "X", "X", "X", 
    "X", "X", "X", " ", "X", "X", "X", "X", "X", "X", "X", "X", "D", 
    "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", 
    "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", 
    "X", "X", "X", "X", "X", "O", "X", "X", "X", "X", "X", "X", "N", 
    "X", "X", "X", "X", "E", "X", "X", "X", "X", "X", "X", "X", "X", 
    "X", "X", ",", "X", " ", "X"
];

let decodedMessage = ""; 


for (let i = 0; i < hiddenMessage.length; i++) {
    if (hiddenMessage[i] !== "X") { 
        decodedMessage += hiddenMessage[i]; 
    }
}

console.log(decodedMessage); 





const hiddenCode = "XXXXXXXXXXXXXXXXXXXXXXXXXXXCXXXXXXXOXXXXXDXXXXXXXXXXXXXXXEXXXX XXXXXXXXXXXXXXX:X0XXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX3XXXXXX2XXXXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX6XXXXXXXXXXXXXXX6XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX7XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2XXXXXXXXXX8XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX8XXXXXXXXXXX4XXXXXXXXXXXX6XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXXXXXXXXXXXXXXXX9XXXX9XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2XXX4XXXXXXXXXXX6XXXXXXXXX2XXXXXXXX3XXXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXX";


const codeArray = hiddenCode.split(""); 

let filteredCode = []; 


for (let i = 0; i < codeArray.length; i++) {
    const char = codeArray[i];
    
if (char !== "X" && !(parseInt(char) % 2 === 0 && !isNaN(char))) {
    filteredCode.push(char); 
    }
}


console.log(filteredCode.join("")); 
