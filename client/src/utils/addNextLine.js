function AddingNextLine(input) {
    console.log("input:"+input);
    let nextInput = "";
    for (let i = 0; i < input.length; i++) {
        if (input[i] === ' ')
            nextInput += '\n';
        else
            nextInput += input[i];

    }
    console.log("nextInput:" + nextInput +"   "+nextInput.length);
    return nextInput;
}

export default AddingNextLine;