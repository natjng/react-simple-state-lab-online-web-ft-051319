import React, { Component } from 'react';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {color: this.props.value};
    }

    handleClick = () => {
        this.setState({color: '#333'});
    }

    render() {
        return (
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick} ></div>
        )
    }
}

export default Cell;