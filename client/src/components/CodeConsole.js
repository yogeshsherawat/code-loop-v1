import React from 'react';
import { Fragment, useRef } from 'react';
import axios from 'axios';

function CodeConsole(props) {

    const { code, iscodeThemeDark, lang, input, codeOutput } = props;
    const { setCode, setIsCodeThemeDark, setCodeOutput, setApiError, setisCompiling } = props;

    const code_area = useRef(null);

    const handleClick = async () => {


        try {

            let callback = 'https://codeloopversion1herokuapp.com/callback'
            let dataString = {
                'source': code,
                'lang': lang,
                'time_limit': 5,
                'memory_limit': 246323,
                'input': input,
                'callback': callback,
                'id': "12347837"
            }
            setApiError(false);
            setisCompiling(true);
            let response = await axios.post('/compile', dataString);
            let data = response.data;
            console.log(data);
            if (data.status === 'API Error')
                setApiError(true);
            await console.log(codeOutput);
            setCodeOutput({
                output: data.output,
                time: data.time,
                status: data.status
            })
            await console.log(codeOutput);
            setisCompiling(false);

        }
        catch (error) {
            console.log(error);
            setisCompiling(false);
            setApiError(true);
        }

    }

    const handleCodeTheme = () => {
        setIsCodeThemeDark(!iscodeThemeDark);
        if (iscodeThemeDark) {

            code_area.current.style.backgroundColor = 'black';
            code_area.current.style.color = 'white';

        }
        else {
            code_area.current.style.backgroundColor = 'white';
            code_area.current.style.color = 'black';

        }
    }

    const handleChange = (e) => {
        setCode(e.target.value);
    }

    return (<Fragment>
        
        <button
            className='btn btn-light float-right'
            onClick={handleCodeTheme}>
            {iscodeThemeDark ? 'Dark' : 'Light'}
        </button>
        <textarea
            ref={code_area}
            className='codeArea mt-3 pt-2 pl-2 '
            onChange={handleChange}
            value={code} placeholder="Enter Code Here" >
        </textarea>
        <button
            className='btn btn-primary '
            style={{ backgroundColor: '#ffb84d', borderColor: 'black', color: 'black', marginTop: '10px', marginBottom: '42px' }}
            onClick={handleClick}>
            Compile & Run
        </button>

    </Fragment>);


    
}
export default CodeConsole;