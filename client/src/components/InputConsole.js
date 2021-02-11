import React from 'react';

class InputConsole extends React.Component{

    
    handleInputChange = (e) => {
        this.props.setInput(e.target.value);
    }

    render() {
        return (
            <textarea
                className='pt-2 pl-2  io-border'
                onChange={this.handleInputChange.bind(this)}
                value={this.props.input}
                placeholder='Enter Input Here'>
            </textarea>

        );
    }

}
export default InputConsole;