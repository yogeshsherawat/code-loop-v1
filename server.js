let express = require("express");
let app = express();
let bodyParser = require('body-parser');
let axios = require('axios');
let path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/compile', async (request, response) => {
    
    try {
        
    
    let Code_Eval_URL = 'https://api.hackerearth.com/v4/partner/code-evaluation/submissions/';
        let clientSecret = process.env.hackerearth_client_secret;
            //'5ce27249c8c7ee4fe414c322a8aa5f309221677d';
    
        

        let dataString = request.body;
    let headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'origin,X-requested-with,content-type,accept',
        'cache-control': 'no-cache',
        'client-secret': clientSecret,
        'Content-Type': 'application/json'
    };
    let config = {
        headers: headers
    };
    let res = await axios.post(Code_Eval_URL, dataString, config);
    //console.log(res.data);
    let statusUrl = res.data.status_update_url;
    let compile_status;
    let res2;
    let is_error_present = false;
    while (1 != 0) {

        res2 = await axios.get(statusUrl, config);
        compile_status = res2.data.result.compile_status;
        if (compile_status === 'OK') {
            console.log("Compile Status:OK");
            break;
        }
        else if (compile_status === null) {
            console.log("compile status:null");
        }
        else {
            console.log("error");
            is_error_present = true;
            break;
        }

    }
        if (is_error_present === true) {
            is_error_present = false;
        let output_error = {
            time: 0,
            status: 'COMPILE ERROR',
            output: compile_status
        }
        response.json(output_error);
        
    }
    else {
        let code_status = res2.data.result.run_status.status;
        let code_time = res2.data.result.run_status.time_used;
        let output_console;
        if (code_status === "AC") {
            let outputURL = res2.data.result.run_status.output;
            let res3 = await axios.get(outputURL);
            let finalOutput = await res3.data;
            output_console = finalOutput;

        }
        else {
            let outputError = res2.data.result.run_status.stderr;
            output_console = outputError;
        }
        let output_data = {
            time: code_time,
            status: code_status,
            output:output_console
        }
        response.json(output_data);


        }
    } catch (error) {
        console.log(error.message);
        let output_error = {
            time: 0,
            status: 'API Error',
            output: ''
        }
        response.json(output_error);

    }



})

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(process.env.PORT || 5000, () => {
    console.log("Server Started");
})