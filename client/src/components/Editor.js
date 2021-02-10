import React, { Fragment, useState, useRef } from 'react';
import axios from 'axios';
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton } from 'react-share';
import { FacebookIcon, WhatsappIcon, TwitterIcon } from 'react-share';

const Editor = (props) => {

    const [iscodeThemeDark, setIsCodeThemeDark] = useState('false');

    const [isCompiling, setisCompiling] = useState(false);

    const [apiError, setApiError] = useState(false);

    const [input, setInput] = useState('');

    const [lang, setLang] = useState('PYTHON3');

    const { code, setCode, codeOutput, setCodeOutput } = props;

    let home_page_url = 'https://codeloopversion1.herokuapp.com/';

    const handleChange = (e) => {
        setCode(e.target.value);
    }
    const handleInputChange = (e) => {
        setInput(e.target.value);
    }
    const JavaBtn = () => {
        setLang('JAVA');
    }
    const java8Btn = () => {
        setLang('JAVA8');
    }
    const Python3Btn = () => {
        setLang('PYTHON3');
    }
    const PythonBtn = () => {
        setLang('PYTHON');
    }
    const cppBtn = () => {
        setLang('CPP');
    }
    const cpp11Btn = () => {
        setLang('CPP11');
    }
    const cpp14Btn = () => {
        setLang('CPP14');
    }




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
            let response = await axios.post('/compile',dataString);
            let data = response.data;
            console.log(data);
            if (data.status === 'API Error')
                setApiError(true);
            await console.log(codeOutput);
            setCodeOutput({
                output: data.output,
                time: data.time,
                status : data.status
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

    const code_area = useRef(null);

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


    return (<Fragment>
        <h1 className='ml-5 pt-2 txtColor-white'><i><span className='txtColor-orange'>Code</span>Loop</i></h1>


        <div className='row'>
            <div className="col-sm-12 col-md-8">
                <div className='container'>
                    <h3 className='text-center txtColor-white'><i><span className='txtColor-orange'>{lang} </span> Editor</i></h3>
                    <button
                        className='btn btn-outline-primary'
                        onClick={JavaBtn}>
                        Java
            </button>
                    <button
                        className='btn btn-outline-primary ml-2'
                        onClick={java8Btn}>
                        Java 8
            </button>
                    <button
                        className='btn btn-outline-danger ml-2'
                        onClick={PythonBtn}>
                        PYTHON
            </button>
                    <button
                        className='btn btn-outline-danger ml-2'
                        onClick={Python3Btn}>
                        PYTHON 3
            </button>
                    <button
                        className='btn btn-outline-warning ml-2'
                        onClick={cppBtn}>
                        C++
            </button>
                    <button
                        className='btn btn-outline-warning ml-2'
                        onClick={cpp11Btn}>
                        C++11
            </button>
                    <button
                        className='btn btn-outline-warning ml-2'
                        onClick={cpp14Btn}>
                        C++14
            </button>
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
                    {isCompiling === true && <i className='txtColor-orange ml-4' style={{ position: 'relative', bottom: '10px' }}>Compiling...</i>}
                    {apiError === true && <i className='txtColor-red ml-4' style={{ position: 'relative', bottom: '10px' }}>API Error</i>}
                    <div className='float-right mt-2'>

                        <FacebookShareButton
                            url={home_page_url}
                            quote={code} >
                            <FacebookIcon
                                size={40} round={true} />

                        </FacebookShareButton>
                        <WhatsappShareButton className='ml-2'
                            title={code}
                            url={home_page_url} separator="
URL: ">
                            <WhatsappIcon size={40} round={true} />

                        </WhatsappShareButton>

                        <TwitterShareButton
                            className='ml-2'
                            title={code}
                            url={home_page_url}
                        >
                            <TwitterIcon size={40} round={true} />
                        </TwitterShareButton>
                    </div>

                </div>
            </div>
            <div className="col-sm-12 col-md-4">

                <div className=" txtColor-white ml-5 mt-5 mr-2" >
                    <textarea
                        className='pt-2 pl-2  io-border'
                        onChange={handleInputChange}
                        value={input}
                        placeholder='Enter Input Here'>
                    </textarea>
                    <h1 className='txtColor-orange ml-5'>
                        Output:
            </h1>

                    <span className='txtColor-orange'
                    >Result:</span>{codeOutput.status}
                    <br />
                    <span className='txtColor-orange'>
                        Execution Time:</span>{codeOutput.time}
                    <br />
                    <span className='txtColor-orange' >
                        Output Console:
                </span><br />
                    <textarea
                        className="mt-2 io-border"
                        value={codeOutput.output}

                        readOnly>

                    </textarea>
                </div>
            </div>


        </div>

    </Fragment>
    );

}

export default Editor;