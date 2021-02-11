const port = process.env.PORT || 4000;

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

const axios = require('axios');


let callback = 'http://localhost:3000/callback/'





app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");



app.get('/', async (request, response) => {

    try {

        let Code_Eval_URL = 'https://api.hackerearth.com/v4/partner/code-evaluation/submissions/';
        let clientSecret = 'df3c51f26932a70a519fd350ee716d9b871ed44c';


        let dataString = {
            'source': 'print("pannu")',
            'lang': 'PYTHON3',
            'time_limit': 5,
            'memory_limit': 246323,
            'input': "",
            'callback': callback,
            'id': "12347837"
        }


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
        console.log(res.data);
    }
    catch (error) {
        console.log(error.message);
    }
});


app.listen(port, () => {
    console.log("editor started");
});