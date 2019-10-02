const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let userMessage = '';
    let position = 0;
    while (position < expr.length){

        if (expr[position] == '*') {
            userMessage += ' ';
            position += 10;
            continue;
        }

        const currentLetter = expr.slice(position, position + 10);
        let morseCode = '';

       
        for (let j = 0; j < currentLetter.length; j++){
            if ((currentLetter[j] == '0') && (j % 2 == 0)) {
                j++;
            } else if ((currentLetter[j] == '1') && (currentLetter[j + 1] == '1')) {
                morseCode += '-';
                j++;
            } else {
                morseCode += '.';
                j++
            }
        }


        for (let [code, symbol] of Object.entries(MORSE_TABLE)) {
            if (code == morseCode) {
                userMessage += symbol;
                break;
            }
        }


        position += 10;
    }


    return userMessage;
}

module.exports = {
    decode
}