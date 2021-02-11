import React, { Fragment, useState, useRef } from 'react';
import OutputConsole from './OutputConsole';
import InputConsole from './InputConsole';
import ShareButtons from './ShareButtons';
import LangBtns from './LangBtns';
import CodeConsole from './CodeConsole';

const Editor = () => {

    const [code, setCode] = useState("");
    const [codeOutput, setCodeOutput] = useState({
        status: '',
        output: '',
        time: ''
    })
    const [iscodeThemeDark, setIsCodeThemeDark] = useState('false');
    const [isCompiling, setisCompiling] = useState(false);
    const [apiError, setApiError] = useState(false);
    const [input, setInput] = useState('');
    const [lang, setLang] = useState('PYTHON3');
    let home_page_url = 'https://codeloopversion1.herokuapp.com/';





    return (<Fragment>
        <h1 className='ml-5 pt-2 txtColor-white'><i><span className='txtColor-orange'>Code</span>Loop</i></h1>


        <div className='row'>
            <div className="col-sm-12 col-md-8">
                <div className='container'>
                    <h3 className='text-center txtColor-white'><i><span className='txtColor-orange'>{lang} </span> Editor</i></h3>
                    <LangBtns setLang={setLang} />
                    <CodeConsole code={code}
                        setCode={setCode}
                        iscodeThemeDark={iscodeThemeDark}
                        setIsCodeThemeDark={setIsCodeThemeDark}
                        isCompiling={isCompiling}
                        setisCompiling={setisCompiling}
                        apiError={apiError}
                        setApiError={setApiError}
                        lang={lang}
                        setCodeOutput={setCodeOutput}
                        input = {input}

                    />


                    {isCompiling === true && <i className='txtColor-orange ml-4' style={{ position: 'relative', bottom: '10px' }}>Compiling...</i>}
                    {apiError === true && <i className='txtColor-red ml-4' style={{ position: 'relative', bottom: '10px' }}>API Error</i>}

                    <div className='float-right mt-2'>
                        <ShareButtons code={code} home_page_url={home_page_url} />
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-4">
                <div className=" txtColor-white ml-5 mt-5 mr-2" >
                    <InputConsole setInput={setInput} input={input} />
                    <OutputConsole codeOutput={codeOutput} />
                </div>
            </div>
        </div>

    </Fragment>
    );

}

export default Editor;