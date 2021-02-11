import React from 'react';
import { Fragment } from 'react';

class OutputConsole extends React.Component{
    


    render() {
        return (<Fragment>
            <h1 className='txtColor-orange ml-5'>
                Output:
            </h1>
            <span className='txtColor-orange'
            >Result:</span>{this.props.codeOutput.status}
            <br />
            <span className='txtColor-orange'>
                Execution Time:</span>{this.props.codeOutput.time}
            <br />
            <span className='txtColor-orange' >
                Output Console:
                </span><br />
            <textarea
                className="mt-2 io-border"
                value={this.props.codeOutput.output}

                readOnly>

            </textarea>
        </Fragment>
        );
    }
}
export default OutputConsole;