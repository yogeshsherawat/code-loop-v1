import React from 'react';
import { Fragment } from 'react';

const LangBtns = (props) =>{

    let setLang = props.setLang;

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

    
        return (
            <Fragment>
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
            </Fragment>
        );
    }


export default LangBtns;