function EnterDetection(input) {
    let nextInput = "";
    console.log("input:" + input);
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '↵') 
            nextInput += '\n';
        
        else
            nextInput += input[i];

    }
    console.log("nextInput:"+nextInput)
    return nextInput;
}

export default EnterDetection;